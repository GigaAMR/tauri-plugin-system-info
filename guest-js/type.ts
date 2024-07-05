import * as v from "valibot"

enum BatteryStateEnum {
  Unknown = "Unknown",
  Charging = "Charging",
  Discharging = "Discharging",
  Empty = "Empty",
  Full = "Full"
}

export const BatteryState = v.enum(BatteryStateEnum)
export type BatteryState = v.InferOutput<typeof BatteryState>

enum BatteryTechnologyEnum {
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
export const BatteryTechnology = v.enum(BatteryTechnologyEnum)
export type BatteryTechnology = v.InferOutput<typeof BatteryTechnology>

export const Battery = v.object({
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
})
export type Battery = v.InferOutput<typeof Battery>

export const Batteries = v.array(Battery)
export type Batteries = v.InferOutput<typeof Batteries>

// TODO: verify actual value returned from rust for "Unknown" enum

// export const DiskKind = v.enum(["HDD", "SSD", "Unknown"]);
export const DiskKind = v.union([
  v.literal("HDD"),
  v.literal("SSD"),
  v.object({
    Unknown: v.number()
  })
])
export type DiskKind = v.InferOutput<typeof DiskKind>

export const MacAddress = v.pipe(v.array(v.number()), v.length(6))
export type MacAddress = v.InferOutput<typeof MacAddress>

export const ProcessStatus = v.union([
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
])
export type ProcessStatus = v.InferOutput<typeof ProcessStatus>

export const DiskUsage = v.object({
  total_written_bytes: v.number(),
  written_bytes: v.number(),
  total_read_bytes: v.number(),
  read_bytes: v.number()
})
export type DiskUsage = v.InferOutput<typeof DiskUsage>

export const Cpu = v.object({
  name: v.string(),
  frequency: v.number(),
  cpu_usage: v.number(),
  vendor_id: v.string(),
  brand: v.string()
})
export type Cpu = v.InferOutput<typeof Cpu>

export const Disk = v.object({
  kind: DiskKind,
  name: v.string(),
  file_system: v.string(),
  mount_point: v.string(),
  total_space: v.number(),
  available_space: v.number(),
  is_removable: v.boolean()
})
export type Disk = v.InferOutput<typeof Disk>

export const Network = v.object({
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
})
export type Network = v.InferOutput<typeof Network>

export const Component = v.object({
  temperature: v.number(),
  max: v.number(),
  critical: v.nullable(v.number()),
  label: v.string()
})
export type Component = v.InferOutput<typeof Component>

export const Process = v.object({
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
})
export type Process = v.InferOutput<typeof Process>

// aggregate info
export const StaticInfo = v.object({
  hostname: v.nullable(v.string()),
  kernel_version: v.nullable(v.string()),
  os_version: v.nullable(v.string()),
  name: v.nullable(v.string())
})
export type StaticInfo = v.InferOutput<typeof StaticInfo>

export const MemoryInfo = v.object({
  total_memory: v.number(),
  used_memory: v.number(),
  total_swap: v.number(),
  used_swap: v.number()
})
export type MemoryInfo = v.InferOutput<typeof MemoryInfo>

export const CpuInfo = v.object({
  cpus: v.array(Cpu),
  cpu_count: v.number()
})
export type CpuInfo = v.InferOutput<typeof CpuInfo>

export const AllSystemInfo = v.object({
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
})
export type AllSystemInfo = v.InferOutput<typeof AllSystemInfo>
