import * as v from "valibot";
declare enum BatteryStateEnum {
    Unknown = "Unknown",
    Charging = "Charging",
    Discharging = "Discharging",
    Empty = "Empty",
    Full = "Full"
}
export declare const BatteryState: v.EnumSchema<typeof BatteryStateEnum, undefined>;
export type BatteryState = v.InferOutput<typeof BatteryState>;
declare enum BatteryTechnologyEnum {
    Unknown = "Unknown",
    LithiumIon = "LithiumIon",
    LeadAcid = "LeadAcid",
    LithiumPolymer = "LithiumPolymer",
    NickelMetalHydride = "NickelMetalHydride",
    NickelCadmium = "NickelCadmium",
    NickelZinc = "NickelZinc",
    LithiumIronPhosphate = "LithiumIronPhosphate",
    RechargeableAlkalineManganese = "RechargeableAlkalineManganese"
}
export declare const BatteryTechnology: v.EnumSchema<typeof BatteryTechnologyEnum, undefined>;
export type BatteryTechnology = v.InferOutput<typeof BatteryTechnology>;
export declare const Battery: v.ObjectSchema<{
    readonly state_of_charge: v.NumberSchema<undefined>;
    readonly energy: v.NumberSchema<undefined>;
    readonly energy_full: v.NumberSchema<undefined>;
    readonly energy_full_design: v.NumberSchema<undefined>;
    readonly energy_rate: v.NumberSchema<undefined>;
    readonly voltage: v.NumberSchema<undefined>;
    readonly state_of_health: v.NumberSchema<undefined>;
    readonly state: v.EnumSchema<typeof BatteryStateEnum, undefined>;
    readonly technology: v.EnumSchema<typeof BatteryTechnologyEnum, undefined>;
    readonly temperature_kelin: v.NullableSchema<v.NumberSchema<undefined>, never>;
    readonly temperature_celsius: v.NullableSchema<v.NumberSchema<undefined>, never>;
    readonly temperature_fahrenheit: v.NullableSchema<v.NumberSchema<undefined>, never>;
    readonly cycle_count: v.NullableSchema<v.NumberSchema<undefined>, never>;
    readonly vendor: v.NullableSchema<v.StringSchema<undefined>, never>;
    readonly model: v.NullableSchema<v.StringSchema<undefined>, never>;
    readonly serial_number: v.NullableSchema<v.StringSchema<undefined>, never>;
    readonly time_to_full: v.NullableSchema<v.NumberSchema<undefined>, never>;
    readonly time_to_empty: v.NullableSchema<v.NumberSchema<undefined>, never>;
}, undefined>;
export type Battery = v.InferOutput<typeof Battery>;
export declare const Batteries: v.ArraySchema<v.ObjectSchema<{
    readonly state_of_charge: v.NumberSchema<undefined>;
    readonly energy: v.NumberSchema<undefined>;
    readonly energy_full: v.NumberSchema<undefined>;
    readonly energy_full_design: v.NumberSchema<undefined>;
    readonly energy_rate: v.NumberSchema<undefined>;
    readonly voltage: v.NumberSchema<undefined>;
    readonly state_of_health: v.NumberSchema<undefined>;
    readonly state: v.EnumSchema<typeof BatteryStateEnum, undefined>;
    readonly technology: v.EnumSchema<typeof BatteryTechnologyEnum, undefined>;
    readonly temperature_kelin: v.NullableSchema<v.NumberSchema<undefined>, never>;
    readonly temperature_celsius: v.NullableSchema<v.NumberSchema<undefined>, never>;
    readonly temperature_fahrenheit: v.NullableSchema<v.NumberSchema<undefined>, never>;
    readonly cycle_count: v.NullableSchema<v.NumberSchema<undefined>, never>;
    readonly vendor: v.NullableSchema<v.StringSchema<undefined>, never>;
    readonly model: v.NullableSchema<v.StringSchema<undefined>, never>;
    readonly serial_number: v.NullableSchema<v.StringSchema<undefined>, never>;
    readonly time_to_full: v.NullableSchema<v.NumberSchema<undefined>, never>;
    readonly time_to_empty: v.NullableSchema<v.NumberSchema<undefined>, never>;
}, undefined>, undefined>;
export type Batteries = v.InferOutput<typeof Batteries>;
export declare const DiskKind: v.UnionSchema<[v.LiteralSchema<"HDD", undefined>, v.LiteralSchema<"SSD", undefined>, v.ObjectSchema<{
    readonly Unknown: v.NumberSchema<undefined>;
}, undefined>], undefined>;
export type DiskKind = v.InferOutput<typeof DiskKind>;
export declare const MacAddress: v.SchemaWithPipe<[v.ArraySchema<v.NumberSchema<undefined>, undefined>, v.LengthAction<number[], 6, undefined>]>;
export type MacAddress = v.InferOutput<typeof MacAddress>;
export declare const ProcessStatus: v.UnionSchema<[v.LiteralSchema<"Idle", undefined>, v.LiteralSchema<"Run", undefined>, v.LiteralSchema<"Sleep", undefined>, v.LiteralSchema<"Stop", undefined>, v.LiteralSchema<"Zombie", undefined>, v.LiteralSchema<"Tracing", undefined>, v.LiteralSchema<"Dead", undefined>, v.LiteralSchema<"Wakekill", undefined>, v.LiteralSchema<"Waking", undefined>, v.LiteralSchema<"Parked", undefined>, v.LiteralSchema<"LockBlocked", undefined>, v.LiteralSchema<"UninterruptibleDiskSleep", undefined>, v.ObjectSchema<{
    readonly Unknown: v.NumberSchema<undefined>;
}, undefined>], undefined>;
export type ProcessStatus = v.InferOutput<typeof ProcessStatus>;
export declare const DiskUsage: v.ObjectSchema<{
    readonly total_written_bytes: v.NumberSchema<undefined>;
    readonly written_bytes: v.NumberSchema<undefined>;
    readonly total_read_bytes: v.NumberSchema<undefined>;
    readonly read_bytes: v.NumberSchema<undefined>;
}, undefined>;
export type DiskUsage = v.InferOutput<typeof DiskUsage>;
export declare const Cpu: v.ObjectSchema<{
    readonly name: v.StringSchema<undefined>;
    readonly frequency: v.NumberSchema<undefined>;
    readonly cpu_usage: v.NumberSchema<undefined>;
    readonly vendor_id: v.StringSchema<undefined>;
    readonly brand: v.StringSchema<undefined>;
}, undefined>;
export type Cpu = v.InferOutput<typeof Cpu>;
export declare const Disk: v.ObjectSchema<{
    readonly kind: v.UnionSchema<[v.LiteralSchema<"HDD", undefined>, v.LiteralSchema<"SSD", undefined>, v.ObjectSchema<{
        readonly Unknown: v.NumberSchema<undefined>;
    }, undefined>], undefined>;
    readonly name: v.StringSchema<undefined>;
    readonly file_system: v.StringSchema<undefined>;
    readonly mount_point: v.StringSchema<undefined>;
    readonly total_space: v.NumberSchema<undefined>;
    readonly available_space: v.NumberSchema<undefined>;
    readonly is_removable: v.BooleanSchema<undefined>;
}, undefined>;
export type Disk = v.InferOutput<typeof Disk>;
export declare const Network: v.ObjectSchema<{
    readonly interface_name: v.StringSchema<undefined>;
    readonly received: v.NumberSchema<undefined>;
    readonly total_received: v.NumberSchema<undefined>;
    readonly transmitted: v.NumberSchema<undefined>;
    readonly total_transmitted: v.NumberSchema<undefined>;
    readonly packets_received: v.NumberSchema<undefined>;
    readonly total_packets_received: v.NumberSchema<undefined>;
    readonly packets_transmitted: v.NumberSchema<undefined>;
    readonly total_packets_transmitted: v.NumberSchema<undefined>;
    readonly errors_on_received: v.NumberSchema<undefined>;
    readonly total_errors_on_received: v.NumberSchema<undefined>;
    readonly errors_on_transmitted: v.NumberSchema<undefined>;
    readonly total_errors_on_transmitted: v.NumberSchema<undefined>;
    readonly mac_address: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
    readonly mac_address_str: v.StringSchema<undefined>;
}, undefined>;
export type Network = v.InferOutput<typeof Network>;
export declare const Component: v.ObjectSchema<{
    readonly temperature: v.NumberSchema<undefined>;
    readonly max: v.NumberSchema<undefined>;
    readonly critical: v.NullableSchema<v.NumberSchema<undefined>, never>;
    readonly label: v.StringSchema<undefined>;
}, undefined>;
export type Component = v.InferOutput<typeof Component>;
export declare const Process: v.ObjectSchema<{
    readonly name: v.StringSchema<undefined>;
    readonly cmd: v.ArraySchema<v.StringSchema<undefined>, undefined>;
    readonly exe: v.NullableSchema<v.StringSchema<undefined>, never>;
    readonly pid: v.NumberSchema<undefined>;
    readonly environ: v.ArraySchema<v.StringSchema<undefined>, undefined>;
    readonly cwd: v.NullableSchema<v.StringSchema<undefined>, never>;
    readonly root: v.NullableSchema<v.StringSchema<undefined>, never>;
    readonly memory: v.NumberSchema<undefined>;
    readonly virtual_memory: v.NumberSchema<undefined>;
    readonly parent: v.NullableSchema<v.NumberSchema<undefined>, never>;
    readonly status: v.UnionSchema<[v.LiteralSchema<"Idle", undefined>, v.LiteralSchema<"Run", undefined>, v.LiteralSchema<"Sleep", undefined>, v.LiteralSchema<"Stop", undefined>, v.LiteralSchema<"Zombie", undefined>, v.LiteralSchema<"Tracing", undefined>, v.LiteralSchema<"Dead", undefined>, v.LiteralSchema<"Wakekill", undefined>, v.LiteralSchema<"Waking", undefined>, v.LiteralSchema<"Parked", undefined>, v.LiteralSchema<"LockBlocked", undefined>, v.LiteralSchema<"UninterruptibleDiskSleep", undefined>, v.ObjectSchema<{
        readonly Unknown: v.NumberSchema<undefined>;
    }, undefined>], undefined>;
    readonly start_time: v.NumberSchema<undefined>;
    readonly run_time: v.NumberSchema<undefined>;
    readonly cpu_usage: v.NumberSchema<undefined>;
    readonly disk_usage: v.ObjectSchema<{
        readonly total_written_bytes: v.NumberSchema<undefined>;
        readonly written_bytes: v.NumberSchema<undefined>;
        readonly total_read_bytes: v.NumberSchema<undefined>;
        readonly read_bytes: v.NumberSchema<undefined>;
    }, undefined>;
    readonly user_id: v.NullableSchema<v.StringSchema<undefined>, never>;
    readonly effective_user_id: v.NullableSchema<v.StringSchema<undefined>, never>;
    readonly group_id: v.NullableSchema<v.StringSchema<undefined>, never>;
    readonly effective_group_id: v.NullableSchema<v.StringSchema<undefined>, never>;
    readonly session_id: v.NullableSchema<v.NumberSchema<undefined>, never>;
}, undefined>;
export type Process = v.InferOutput<typeof Process>;
export declare const StaticInfo: v.ObjectSchema<{
    readonly hostname: v.NullableSchema<v.StringSchema<undefined>, never>;
    readonly kernel_version: v.NullableSchema<v.StringSchema<undefined>, never>;
    readonly os_version: v.NullableSchema<v.StringSchema<undefined>, never>;
    readonly name: v.NullableSchema<v.StringSchema<undefined>, never>;
}, undefined>;
export type StaticInfo = v.InferOutput<typeof StaticInfo>;
export declare const MemoryInfo: v.ObjectSchema<{
    readonly total_memory: v.NumberSchema<undefined>;
    readonly used_memory: v.NumberSchema<undefined>;
    readonly total_swap: v.NumberSchema<undefined>;
    readonly used_swap: v.NumberSchema<undefined>;
}, undefined>;
export type MemoryInfo = v.InferOutput<typeof MemoryInfo>;
export declare const CpuInfo: v.ObjectSchema<{
    readonly cpus: v.ArraySchema<v.ObjectSchema<{
        readonly name: v.StringSchema<undefined>;
        readonly frequency: v.NumberSchema<undefined>;
        readonly cpu_usage: v.NumberSchema<undefined>;
        readonly vendor_id: v.StringSchema<undefined>;
        readonly brand: v.StringSchema<undefined>;
    }, undefined>, undefined>;
    readonly cpu_count: v.NumberSchema<undefined>;
}, undefined>;
export type CpuInfo = v.InferOutput<typeof CpuInfo>;
export declare const AllSystemInfo: v.ObjectSchema<{
    readonly hostname: v.NullableSchema<v.StringSchema<undefined>, never>;
    readonly kernel_version: v.NullableSchema<v.StringSchema<undefined>, never>;
    readonly os_version: v.NullableSchema<v.StringSchema<undefined>, never>;
    readonly name: v.NullableSchema<v.StringSchema<undefined>, never>;
    readonly total_memory: v.NumberSchema<undefined>;
    readonly used_memory: v.NumberSchema<undefined>;
    readonly total_swap: v.NumberSchema<undefined>;
    readonly used_swap: v.NumberSchema<undefined>;
    readonly cpus: v.ArraySchema<v.ObjectSchema<{
        readonly name: v.StringSchema<undefined>;
        readonly frequency: v.NumberSchema<undefined>;
        readonly cpu_usage: v.NumberSchema<undefined>;
        readonly vendor_id: v.StringSchema<undefined>;
        readonly brand: v.StringSchema<undefined>;
    }, undefined>, undefined>;
    readonly cpu_count: v.NumberSchema<undefined>;
    readonly disks: v.ArraySchema<v.ObjectSchema<{
        readonly kind: v.UnionSchema<[v.LiteralSchema<"HDD", undefined>, v.LiteralSchema<"SSD", undefined>, v.ObjectSchema<{
            readonly Unknown: v.NumberSchema<undefined>;
        }, undefined>], undefined>;
        readonly name: v.StringSchema<undefined>;
        readonly file_system: v.StringSchema<undefined>;
        readonly mount_point: v.StringSchema<undefined>;
        readonly total_space: v.NumberSchema<undefined>;
        readonly available_space: v.NumberSchema<undefined>;
        readonly is_removable: v.BooleanSchema<undefined>;
    }, undefined>, undefined>;
    readonly networks: v.ArraySchema<v.ObjectSchema<{
        readonly interface_name: v.StringSchema<undefined>;
        readonly received: v.NumberSchema<undefined>;
        readonly total_received: v.NumberSchema<undefined>;
        readonly transmitted: v.NumberSchema<undefined>;
        readonly total_transmitted: v.NumberSchema<undefined>;
        readonly packets_received: v.NumberSchema<undefined>;
        readonly total_packets_received: v.NumberSchema<undefined>;
        readonly packets_transmitted: v.NumberSchema<undefined>;
        readonly total_packets_transmitted: v.NumberSchema<undefined>;
        readonly errors_on_received: v.NumberSchema<undefined>;
        readonly total_errors_on_received: v.NumberSchema<undefined>;
        readonly errors_on_transmitted: v.NumberSchema<undefined>;
        readonly total_errors_on_transmitted: v.NumberSchema<undefined>;
        readonly mac_address: v.ArraySchema<v.NumberSchema<undefined>, undefined>;
        readonly mac_address_str: v.StringSchema<undefined>;
    }, undefined>, undefined>;
    readonly components: v.ArraySchema<v.ObjectSchema<{
        readonly temperature: v.NumberSchema<undefined>;
        readonly max: v.NumberSchema<undefined>;
        readonly critical: v.NullableSchema<v.NumberSchema<undefined>, never>;
        readonly label: v.StringSchema<undefined>;
    }, undefined>, undefined>;
    readonly processes: v.ArraySchema<v.ObjectSchema<{
        readonly name: v.StringSchema<undefined>;
        readonly cmd: v.ArraySchema<v.StringSchema<undefined>, undefined>;
        readonly exe: v.NullableSchema<v.StringSchema<undefined>, never>;
        readonly pid: v.NumberSchema<undefined>;
        readonly environ: v.ArraySchema<v.StringSchema<undefined>, undefined>;
        readonly cwd: v.NullableSchema<v.StringSchema<undefined>, never>;
        readonly root: v.NullableSchema<v.StringSchema<undefined>, never>;
        readonly memory: v.NumberSchema<undefined>;
        readonly virtual_memory: v.NumberSchema<undefined>;
        readonly parent: v.NullableSchema<v.NumberSchema<undefined>, never>;
        readonly status: v.UnionSchema<[v.LiteralSchema<"Idle", undefined>, v.LiteralSchema<"Run", undefined>, v.LiteralSchema<"Sleep", undefined>, v.LiteralSchema<"Stop", undefined>, v.LiteralSchema<"Zombie", undefined>, v.LiteralSchema<"Tracing", undefined>, v.LiteralSchema<"Dead", undefined>, v.LiteralSchema<"Wakekill", undefined>, v.LiteralSchema<"Waking", undefined>, v.LiteralSchema<"Parked", undefined>, v.LiteralSchema<"LockBlocked", undefined>, v.LiteralSchema<"UninterruptibleDiskSleep", undefined>, v.ObjectSchema<{
            readonly Unknown: v.NumberSchema<undefined>;
        }, undefined>], undefined>;
        readonly start_time: v.NumberSchema<undefined>;
        readonly run_time: v.NumberSchema<undefined>;
        readonly cpu_usage: v.NumberSchema<undefined>;
        readonly disk_usage: v.ObjectSchema<{
            readonly total_written_bytes: v.NumberSchema<undefined>;
            readonly written_bytes: v.NumberSchema<undefined>;
            readonly total_read_bytes: v.NumberSchema<undefined>;
            readonly read_bytes: v.NumberSchema<undefined>;
        }, undefined>;
        readonly user_id: v.NullableSchema<v.StringSchema<undefined>, never>;
        readonly effective_user_id: v.NullableSchema<v.StringSchema<undefined>, never>;
        readonly group_id: v.NullableSchema<v.StringSchema<undefined>, never>;
        readonly effective_group_id: v.NullableSchema<v.StringSchema<undefined>, never>;
        readonly session_id: v.NullableSchema<v.NumberSchema<undefined>, never>;
    }, undefined>, undefined>;
    readonly batteries: v.ArraySchema<v.ObjectSchema<{
        readonly state_of_charge: v.NumberSchema<undefined>;
        readonly energy: v.NumberSchema<undefined>;
        readonly energy_full: v.NumberSchema<undefined>;
        readonly energy_full_design: v.NumberSchema<undefined>;
        readonly energy_rate: v.NumberSchema<undefined>;
        readonly voltage: v.NumberSchema<undefined>;
        readonly state_of_health: v.NumberSchema<undefined>;
        readonly state: v.EnumSchema<typeof BatteryStateEnum, undefined>;
        readonly technology: v.EnumSchema<typeof BatteryTechnologyEnum, undefined>;
        readonly temperature_kelin: v.NullableSchema<v.NumberSchema<undefined>, never>;
        readonly temperature_celsius: v.NullableSchema<v.NumberSchema<undefined>, never>;
        readonly temperature_fahrenheit: v.NullableSchema<v.NumberSchema<undefined>, never>;
        readonly cycle_count: v.NullableSchema<v.NumberSchema<undefined>, never>;
        readonly vendor: v.NullableSchema<v.StringSchema<undefined>, never>;
        readonly model: v.NullableSchema<v.StringSchema<undefined>, never>;
        readonly serial_number: v.NullableSchema<v.StringSchema<undefined>, never>;
        readonly time_to_full: v.NullableSchema<v.NumberSchema<undefined>, never>;
        readonly time_to_empty: v.NullableSchema<v.NumberSchema<undefined>, never>;
    }, undefined>, undefined>;
}, undefined>;
export type AllSystemInfo = v.InferOutput<typeof AllSystemInfo>;
export {};
//# sourceMappingURL=type.d.ts.map