'use strict';

var core = require('@tauri-apps/api/core');
var v = require('valibot');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var v__namespace = /*#__PURE__*/_interopNamespaceDefault(v);

function allSysInfo() {
    return core.invoke("plugin:system-info|all_sys_info");
}
// Memory
function totalMemory() {
    return core.invoke("plugin:system-info|total_memory");
}
function usedMemory() {
    return core.invoke("plugin:system-info|used_memory");
}
function totalSwap() {
    return core.invoke("plugin:system-info|total_swap");
}
function usedSwap() {
    return core.invoke("plugin:system-info|used_swap");
}
function memoryInfo() {
    return core.invoke("plugin:system-info|memory_info");
}
// Static Info
function hostname() {
    return core.invoke("plugin:system-info|hostname");
}
function name() {
    return core.invoke("plugin:system-info|name");
}
function kernelVersion() {
    return core.invoke("plugin:system-info|kernel_version");
}
function osVersion() {
    return core.invoke("plugin:system-info|os_version");
}
function staticInfo() {
    return core.invoke("plugin:system-info|static_info");
}
// Components
function components() {
    return core.invoke("plugin:system-info|components");
}
// Cpu
function cpus() {
    return core.invoke("plugin:system-info|cpus");
}
function cpuCount() {
    return core.invoke("plugin:system-info|cpu_count");
}
function cpuInfo() {
    return core.invoke("plugin:system-info|cpu_info");
}
// Disk
function disks() {
    return core.invoke("plugin:system-info|disks");
}
// Network
function networks() {
    return core.invoke("plugin:system-info|networks");
}
// Process
function processes() {
    return core.invoke("plugin:system-info|processes");
}
// Refresh
function refreshAll() {
    return core.invoke("plugin:system-info|refresh_all");
}
function refreshMemory() {
    return core.invoke("plugin:system-info|refresh_memory");
}
function refreshCpu() {
    return core.invoke("plugin:system-info|refresh_cpu");
}
function refreshProcesses() {
    return core.invoke("plugin:system-info|refresh_processes");
}
function debugCommand() {
    return core.invoke("plugin:system-info|debug");
}
function batteries() {
    return core.invoke("plugin:system-info|batteries");
}

var BatteryStateEnum;
(function (BatteryStateEnum) {
    BatteryStateEnum["Unknown"] = "Unknown";
    BatteryStateEnum["Charging"] = "Charging";
    BatteryStateEnum["Discharging"] = "Discharging";
    BatteryStateEnum["Empty"] = "Empty";
    BatteryStateEnum["Full"] = "Full";
})(BatteryStateEnum || (BatteryStateEnum = {}));
const BatteryState = v__namespace.enum(BatteryStateEnum);
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
const BatteryTechnology = v__namespace.enum(BatteryTechnologyEnum);
const Battery = v__namespace.object({
    state_of_charge: v__namespace.number(),
    energy: v__namespace.number(),
    energy_full: v__namespace.number(),
    energy_full_design: v__namespace.number(),
    energy_rate: v__namespace.number(),
    // .describe("Amount of energy being drained from the battery."),
    voltage: v__namespace.number(),
    state_of_health: v__namespace.number(),
    state: BatteryState,
    technology: BatteryTechnology,
    temperature_kelin: v__namespace.nullable(v__namespace.number()),
    temperature_celsius: v__namespace.nullable(v__namespace.number()),
    temperature_fahrenheit: v__namespace.nullable(v__namespace.number()),
    cycle_count: v__namespace.nullable(v__namespace.number()),
    vendor: v__namespace.nullable(v__namespace.string()),
    model: v__namespace.nullable(v__namespace.string()),
    serial_number: v__namespace.nullable(v__namespace.string()),
    time_to_full: v__namespace.nullable(v__namespace.number()),
    time_to_empty: v__namespace.nullable(v__namespace.number())
});
const Batteries = v__namespace.array(Battery);
// TODO: verify actual value returned from rust for "Unknown" enum
// export const DiskKind = v.enum(["HDD", "SSD", "Unknown"]);
const DiskKind = v__namespace.union([
    v__namespace.literal("HDD"),
    v__namespace.literal("SSD"),
    v__namespace.object({
        Unknown: v__namespace.number()
    })
]);
const MacAddress = v__namespace.pipe(v__namespace.array(v__namespace.number()), v__namespace.length(6));
const ProcessStatus = v__namespace.union([
    v__namespace.literal("Idle"),
    v__namespace.literal("Run"),
    v__namespace.literal("Sleep"),
    v__namespace.literal("Stop"),
    v__namespace.literal("Zombie"),
    v__namespace.literal("Tracing"),
    v__namespace.literal("Dead"),
    v__namespace.literal("Wakekill"),
    v__namespace.literal("Waking"),
    v__namespace.literal("Parked"),
    v__namespace.literal("LockBlocked"),
    v__namespace.literal("UninterruptibleDiskSleep"),
    v__namespace.object({
        Unknown: v__namespace.number()
    })
]);
const DiskUsage = v__namespace.object({
    total_written_bytes: v__namespace.number(),
    written_bytes: v__namespace.number(),
    total_read_bytes: v__namespace.number(),
    read_bytes: v__namespace.number()
});
const Cpu = v__namespace.object({
    name: v__namespace.string(),
    frequency: v__namespace.number(),
    cpu_usage: v__namespace.number(),
    vendor_id: v__namespace.string(),
    brand: v__namespace.string()
});
const Disk = v__namespace.object({
    kind: DiskKind,
    name: v__namespace.string(),
    file_system: v__namespace.string(),
    mount_point: v__namespace.string(),
    total_space: v__namespace.number(),
    available_space: v__namespace.number(),
    is_removable: v__namespace.boolean()
});
const Network = v__namespace.object({
    interface_name: v__namespace.string(),
    received: v__namespace.number(),
    total_received: v__namespace.number(),
    transmitted: v__namespace.number(),
    total_transmitted: v__namespace.number(),
    packets_received: v__namespace.number(),
    total_packets_received: v__namespace.number(),
    packets_transmitted: v__namespace.number(),
    total_packets_transmitted: v__namespace.number(),
    errors_on_received: v__namespace.number(),
    total_errors_on_received: v__namespace.number(),
    errors_on_transmitted: v__namespace.number(),
    total_errors_on_transmitted: v__namespace.number(),
    mac_address: v__namespace.array(v__namespace.number()),
    mac_address_str: v__namespace.string()
});
const Component = v__namespace.object({
    temperature: v__namespace.number(),
    max: v__namespace.number(),
    critical: v__namespace.nullable(v__namespace.number()),
    label: v__namespace.string()
});
const Process = v__namespace.object({
    name: v__namespace.string(),
    cmd: v__namespace.array(v__namespace.string()),
    exe: v__namespace.nullable(v__namespace.string()),
    pid: v__namespace.number(),
    environ: v__namespace.array(v__namespace.string()),
    cwd: v__namespace.nullable(v__namespace.string()),
    root: v__namespace.nullable(v__namespace.string()),
    memory: v__namespace.number(),
    virtual_memory: v__namespace.number(),
    parent: v__namespace.nullable(v__namespace.number()),
    status: ProcessStatus,
    start_time: v__namespace.number(),
    run_time: v__namespace.number(),
    cpu_usage: v__namespace.number(),
    disk_usage: DiskUsage,
    user_id: v__namespace.nullable(v__namespace.string()),
    effective_user_id: v__namespace.nullable(v__namespace.string()),
    group_id: v__namespace.nullable(v__namespace.string()),
    effective_group_id: v__namespace.nullable(v__namespace.string()),
    session_id: v__namespace.nullable(v__namespace.number())
});
// aggregate info
const StaticInfo = v__namespace.object({
    hostname: v__namespace.nullable(v__namespace.string()),
    kernel_version: v__namespace.nullable(v__namespace.string()),
    os_version: v__namespace.nullable(v__namespace.string()),
    name: v__namespace.nullable(v__namespace.string())
});
const MemoryInfo = v__namespace.object({
    total_memory: v__namespace.number(),
    used_memory: v__namespace.number(),
    total_swap: v__namespace.number(),
    used_swap: v__namespace.number()
});
const CpuInfo = v__namespace.object({
    cpus: v__namespace.array(Cpu),
    cpu_count: v__namespace.number()
});
const AllSystemInfo = v__namespace.object({
    hostname: v__namespace.nullable(v__namespace.string()),
    kernel_version: v__namespace.nullable(v__namespace.string()),
    os_version: v__namespace.nullable(v__namespace.string()),
    name: v__namespace.nullable(v__namespace.string()),
    total_memory: v__namespace.number(),
    used_memory: v__namespace.number(),
    total_swap: v__namespace.number(),
    used_swap: v__namespace.number(),
    cpus: v__namespace.array(Cpu),
    cpu_count: v__namespace.number(),
    disks: v__namespace.array(Disk),
    networks: v__namespace.array(Network),
    components: v__namespace.array(Component),
    processes: v__namespace.array(Process),
    batteries: Batteries
});

exports.AllSystemInfo = AllSystemInfo;
exports.Batteries = Batteries;
exports.Battery = Battery;
exports.BatteryState = BatteryState;
exports.BatteryTechnology = BatteryTechnology;
exports.Component = Component;
exports.Cpu = Cpu;
exports.CpuInfo = CpuInfo;
exports.Disk = Disk;
exports.DiskKind = DiskKind;
exports.DiskUsage = DiskUsage;
exports.MacAddress = MacAddress;
exports.MemoryInfo = MemoryInfo;
exports.Network = Network;
exports.Process = Process;
exports.ProcessStatus = ProcessStatus;
exports.StaticInfo = StaticInfo;
exports.allSysInfo = allSysInfo;
exports.batteries = batteries;
exports.components = components;
exports.cpuCount = cpuCount;
exports.cpuInfo = cpuInfo;
exports.cpus = cpus;
exports.debugCommand = debugCommand;
exports.disks = disks;
exports.hostname = hostname;
exports.kernelVersion = kernelVersion;
exports.memoryInfo = memoryInfo;
exports.name = name;
exports.networks = networks;
exports.osVersion = osVersion;
exports.processes = processes;
exports.refreshAll = refreshAll;
exports.refreshCpu = refreshCpu;
exports.refreshMemory = refreshMemory;
exports.refreshProcesses = refreshProcesses;
exports.staticInfo = staticInfo;
exports.totalMemory = totalMemory;
exports.totalSwap = totalSwap;
exports.usedMemory = usedMemory;
exports.usedSwap = usedSwap;
