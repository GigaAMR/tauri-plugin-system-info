<script lang="ts">
  import { invoke } from "@tauri-apps/api/core";
  import { onMount } from "svelte";
  import {
    allSysInfo,
    AllSystemInfo,
    batteries,
    Batteries,
    components,
    cpuCount,
    cpuInfo,
    CpuInfo,
    cpus,
    debugCommand,
    disks,
    hostname,
    kernelVersion,
    memoryInfo,
    MemoryInfo,
    name,
    networks,
    osVersion,
    processes,
    Process,
    refreshAll,
    refreshCpu,
    refreshMemory,
    refreshProcesses,
    staticInfo,
    StaticInfo,
    totalMemory,
    totalSwap,
    usedMemory,
    usedSwap,
  } from "tauri-plugin-system-info-api";
  import * as v from "valibot";

  onMount(async () => {
    reload();
    invoke("cpu_count").then((res) => {
      console.log(res);
    });
  });

  async function reload() {
    refreshAll();
    // ! used to debug if there is any parse error. There shouldn't.
    // let ret = AllSystemInfo.safeParse(await allSysInfo());
    // if (!ret.success) {
    //   console.log(ret.error);
    // }
    console.log("All System Info", v.parse(AllSystemInfo, await allSysInfo()));
    console.log("Memory Info", v.parse(MemoryInfo, await memoryInfo()));
    console.log("Static Info", v.parse(StaticInfo, await staticInfo()));
    console.log("CPU Info", v.parse(CpuInfo, await cpuInfo()));
    console.log("Battery Info", v.parse(Batteries, await batteries()));
    const processesInfo = await processes();

    const allPs = v.parse(
      v.array(Process),
      processesInfo.sort((a, b) => b.memory - a.memory)
    );
    console.log(allPs.filter((ps) => ps.name.toLowerCase().includes("rust")));
  }
  let data: string = "";
  let error: string = "";
</script>

<div class="alert alert-warning flex flex-col">
  <span
    >Make sure you are in Tauri desktop app with development mode. Right click
    and inspect elements, check console for system info logged. There is too
    much data to display on screen.</span
  >
  <span
    >If there is error in console, this library may not support your
    OS/computer, you can notify the author.</span
  >
  <button class="btn" on:click={reload}>Reload</button>
</div>
