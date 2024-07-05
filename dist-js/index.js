import { invoke } from '@tauri-apps/api/core';
import * as v from 'valibot';

function allSysInfo() {
    return invoke("plugin:system-info|all_sys_info");
}
// Memory
function totalMemory() {
    return invoke("plugin:system-info|total_memory");
}
function usedMemory() {
    return invoke("plugin:system-info|used_memory");
}
function totalSwap() {
    return invoke("plugin:system-info|total_swap");
}
function usedSwap() {
    return invoke("plugin:system-info|used_swap");
}
function memoryInfo() {
    return invoke("plugin:system-info|memory_info");
}
// Static Info
function hostname() {
    return invoke("plugin:system-info|hostname");
}
function name() {
    return invoke("plugin:system-info|name");
}
function kernelVersion() {
    return invoke("plugin:system-info|kernel_version");
}
function osVersion() {
    return invoke("plugin:system-info|os_version");
}
function staticInfo() {
    return invoke("plugin:system-info|static_info");
}
// Components
function components() {
    return invoke("plugin:system-info|components");
}
// Cpu
function cpus() {
    return invoke("plugin:system-info|cpus");
}
function cpuCount() {
    return invoke("plugin:system-info|cpu_count");
}
function cpuInfo() {
    return invoke("plugin:system-info|cpu_info");
}
// Disk
function disks() {
    return invoke("plugin:system-info|disks");
}
// Network
function networks() {
    return invoke("plugin:system-info|networks");
}
// Process
function processes() {
    return invoke("plugin:system-info|processes");
}
// Refresh
function refreshAll() {
    return invoke("plugin:system-info|refresh_all");
}
function refreshMemory() {
    return invoke("plugin:system-info|refresh_memory");
}
function refreshCpu() {
    return invoke("plugin:system-info|refresh_cpu");
}
function refreshProcesses() {
    return invoke("plugin:system-info|refresh_processes");
}
function debugCommand() {
    return invoke("plugin:system-info|debug");
}
function batteries() {
    return invoke("plugin:system-info|batteries");
}

var BatteryStateEnum;
(function (BatteryStateEnum) {
    BatteryStateEnum["Unknown"] = "Unknown";
    BatteryStateEnum["Charging"] = "Charging";
    BatteryStateEnum["Discharging"] = "Discharging";
    BatteryStateEnum["Empty"] = "Empty";
    BatteryStateEnum["Full"] = "Full";
})(BatteryStateEnum || (BatteryStateEnum = {}));
const BatteryState = v.enum(BatteryStateEnum);
var BatteryTechnologyEnum;
(function (BatteryTechnologyEnum) {
    BatteryTechnologyEnum["Unknown"] = "Unknown";
    BatteryTechnologyEnum["LithiumIon"] = "LithiumIon";
    BatteryTechnologyEnum["LeadAcid"] = "LeadAcid";
    BatteryTechnologyEnum["LithiumPolymer"] = "LithiumPolymer";
    BatteryTechnologyEnum["NickelMetalHydride"] = "NickelMetalHydride";
    BatteryTechnologyEnum["NickelCadmium"] = "NickelCadmium";
    BatteryTechnologyEnum["NickelZinc"] = "NickelZinc";
    BatteryTechnologyEnum["LithiumIronPhosphate"] = "LithiumIronPhosphate";
    BatteryTechnologyEnum["RechargeableAlkalineManganese"] = "RechargeableAlkalineManganese";
})(BatteryTechnologyEnum || (BatteryTechnologyEnum = {}));
const BatteryTechnology = v.enum(BatteryTechnologyEnum);
const Battery = v.object({
    state_of_charge: v.number(),
    energy: v.number(),
    energy_full: v.number(),
    energy_full_design: v.number(),
    energy_rate: v.number(),
    // .describe("Amount of energy being drained from the battery."),
    voltage: v.number(),
    state_of_health: v.number(),
    state: BatteryState,
    technology: BatteryTechnology,
    temperature_kelin: v.nullable(v.number()),
    temperature_celsius: v.nullable(v.number()),
    temperature_fahrenheit: v.nullable(v.number()),
    cycle_count: v.nullable(v.number()),
    vendor: v.nullable(v.string()),
    model: v.nullable(v.string()),
    serial_number: v.nullable(v.string()),
    time_to_full: v.nullable(v.number()),
    time_to_empty: v.nullable(v.number())
});
const Batteries = v.array(Battery);
// TODO: verify actual value returned from rust for "Unknown" enum
// export const DiskKind = v.enum(["HDD", "SSD", "Unknown"]);
const DiskKind = v.union([
    v.literal("HDD"),
    v.literal("SSD"),
    v.object({
        Unknown: v.number()
    })
]);
const MacAddress = v.pipe(v.array(v.number()), v.length(6));
const ProcessStatus = v.union([
    v.literal("Idle"),
    v.literal("Run"),
    v.literal("Sleep"),
    v.literal("Stop"),
    v.literal("Zombie"),
    v.literal("Tracing"),
    v.literal("Dead"),
    v.literal("Wakekill"),
    v.literal("Waking"),
    v.literal("Parked"),
    v.literal("LockBlocked"),
    v.literal("UninterruptibleDiskSleep"),
    v.object({
        Unknown: v.number()
    })
]);
const DiskUsage = v.object({
    total_written_bytes: v.number(),
    written_bytes: v.number(),
    total_read_bytes: v.number(),
    read_bytes: v.number()
});
const Cpu = v.object({
    name: v.string(),
    frequency: v.number(),
    cpu_usage: v.number(),
    vendor_id: v.string(),
    brand: v.string()
});
const Disk = v.object({
    kind: DiskKind,
    name: v.string(),
    file_system: v.string(),
    mount_point: v.string(),
    total_space: v.number(),
    available_space: v.number(),
    is_removable: v.boolean()
});
const Network = v.object({
    interface_name: v.string(),
    received: v.number(),
    total_received: v.number(),
    transmitted: v.number(),
    total_transmitted: v.number(),
    packets_received: v.number(),
    total_packets_received: v.number(),
    packets_transmitted: v.number(),
    total_packets_transmitted: v.number(),
    errors_on_received: v.number(),
    total_errors_on_received: v.number(),
    errors_on_transmitted: v.number(),
    total_errors_on_transmitted: v.number(),
    mac_address: v.array(v.number()),
    mac_address_str: v.string()
});
const Component = v.object({
    temperature: v.number(),
    max: v.number(),
    critical: v.nullable(v.number()),
    label: v.string()
});
const Process = v.object({
    name: v.string(),
    cmd: v.array(v.string()),
    exe: v.nullable(v.string()),
    pid: v.number(),
    environ: v.array(v.string()),
    cwd: v.nullable(v.string()),
    root: v.nullable(v.string()),
    memory: v.number(),
    virtual_memory: v.number(),
    parent: v.nullable(v.number()),
    status: ProcessStatus,
    start_time: v.number(),
    run_time: v.number(),
    cpu_usage: v.number(),
    disk_usage: DiskUsage,
    user_id: v.nullable(v.string()),
    effective_user_id: v.nullable(v.string()),
    group_id: v.nullable(v.string()),
    effective_group_id: v.nullable(v.string()),
    session_id: v.nullable(v.number())
});
// aggregate info
const StaticInfo = v.object({
    hostname: v.nullable(v.string()),
    kernel_version: v.nullable(v.string()),
    os_version: v.nullable(v.string()),
    name: v.nullable(v.string())
});
const MemoryInfo = v.object({
    total_memory: v.number(),
    used_memory: v.number(),
    total_swap: v.number(),
    used_swap: v.number()
});
const CpuInfo = v.object({
    cpus: v.array(Cpu),
    cpu_count: v.number()
});
const AllSystemInfo = v.object({
    hostname: v.nullable(v.string()),
    kernel_version: v.nullable(v.string()),
    os_version: v.nullable(v.string()),
    name: v.nullable(v.string()),
    total_memory: v.number(),
    used_memory: v.number(),
    total_swap: v.number(),
    used_swap: v.number(),
    cpus: v.array(Cpu),
    cpu_count: v.number(),
    disks: v.array(Disk),
    networks: v.array(Network),
    components: v.array(Component),
    processes: v.array(Process),
    batteries: Batteries
});

export { AllSystemInfo, Batteries, Battery, BatteryState, BatteryTechnology, Component, Cpu, CpuInfo, Disk, DiskKind, DiskUsage, MacAddress, MemoryInfo, Network, Process, ProcessStatus, StaticInfo, allSysInfo, batteries, components, cpuCount, cpuInfo, cpus, debugCommand, disks, hostname, kernelVersion, memoryInfo, name, networks, osVersion, processes, refreshAll, refreshCpu, refreshMemory, refreshProcesses, staticInfo, totalMemory, totalSwap, usedMemory, usedSwap };
