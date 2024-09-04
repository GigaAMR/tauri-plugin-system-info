use serde::{Deserialize, Serialize};
use std::path::PathBuf;

#[derive(Debug, Serialize, Deserialize)]
pub enum DiskKind {
    /// HDD type.
    HDD,
    /// SSD type.
    SSD,
    /// Unknown type.
    Unknown(isize),
}
impl From<sysinfo::DiskKind> for DiskKind {
    fn from(value: sysinfo::DiskKind) -> Self {
        match value {
            sysinfo::DiskKind::HDD => DiskKind::HDD,
            sysinfo::DiskKind::SSD => DiskKind::SSD,
            sysinfo::DiskKind::Unknown(isize) => DiskKind::Unknown(isize),
        }
    }
}

#[derive(Debug, Serialize, Deserialize)]
pub struct MacAddr(pub [u8; 6]);

impl From<sysinfo::MacAddr> for MacAddr {
    fn from(value: sysinfo::MacAddr) -> Self {
        MacAddr(value.0)
    }
}

#[derive(Debug, Serialize, Deserialize)]
pub enum ProcessStatus {
    Idle,
    Run,
    Sleep,
    Stop,
    Zombie,
    Tracing,
    Dead,
    Wakekill,
    Waking,
    Parked,
    LockBlocked,
    UninterruptibleDiskSleep,
    Unknown(u32),
}

impl From<sysinfo::ProcessStatus> for ProcessStatus {
    fn from(ps: sysinfo::ProcessStatus) -> Self {
        match ps {
            sysinfo::ProcessStatus::Idle => ProcessStatus::Idle,
            sysinfo::ProcessStatus::Run => ProcessStatus::Run,
            sysinfo::ProcessStatus::Sleep => ProcessStatus::Sleep,
            sysinfo::ProcessStatus::Stop => ProcessStatus::Stop,
            sysinfo::ProcessStatus::Zombie => ProcessStatus::Zombie,
            sysinfo::ProcessStatus::Tracing => ProcessStatus::Tracing,
            sysinfo::ProcessStatus::Dead => ProcessStatus::Dead,
            sysinfo::ProcessStatus::Wakekill => ProcessStatus::Wakekill,
            sysinfo::ProcessStatus::Waking => ProcessStatus::Waking,
            sysinfo::ProcessStatus::Parked => ProcessStatus::Parked,
            sysinfo::ProcessStatus::LockBlocked => ProcessStatus::LockBlocked,
            sysinfo::ProcessStatus::UninterruptibleDiskSleep => {
                ProcessStatus::UninterruptibleDiskSleep
            }
            sysinfo::ProcessStatus::Unknown(u32) => ProcessStatus::Unknown(u32),
        }
    }
}

#[derive(Debug, Serialize, Deserialize)]
pub struct DiskUsage {
    /// Total number of written bytes.
    pub total_written_bytes: u64,
    /// Number of written bytes since the last refresh.
    pub written_bytes: u64,
    /// Total number of read bytes.
    pub total_read_bytes: u64,
    /// Number of read bytes since the last refresh.
    pub read_bytes: u64,
}

impl From<sysinfo::DiskUsage> for DiskUsage {
    fn from(value: sysinfo::DiskUsage) -> Self {
        DiskUsage {
            total_written_bytes: value.total_written_bytes,
            written_bytes: value.written_bytes,
            total_read_bytes: value.total_read_bytes,
            read_bytes: value.read_bytes,
        }
    }
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Cpu {
    name: String,
    frequency: u64,
    cpu_usage: f32,
    vendor_id: String,
    brand: String,
}

impl From<&sysinfo::Cpu> for Cpu {
    fn from(cpu: &sysinfo::Cpu) -> Self {
        Cpu {
            name: cpu.name().to_string(),
            frequency: cpu.frequency(),
            cpu_usage: cpu.cpu_usage(),
            vendor_id: cpu.vendor_id().to_string(),
            brand: cpu.brand().to_string(),
        }
    }
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Disk {
    kind: DiskKind,
    name: String,
    file_system: String,
    mount_point: PathBuf,
    total_space: u64,
    available_space: u64,
    is_removable: bool,
}

impl From<&sysinfo::Disk> for Disk {
    fn from(disk: &sysinfo::Disk) -> Self {
        Disk {
            kind: disk.kind().into(),
            name: disk.name().to_string_lossy().into_owned(),
            file_system: disk.file_system().to_string_lossy().into_owned(),
            mount_point: disk.mount_point().into(),
            total_space: disk.total_space(),
            available_space: disk.available_space(),
            is_removable: disk.is_removable(),
        }
    }
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Network {
    interface_name: String,
    received: u64,
    total_received: u64,
    transmitted: u64,
    total_transmitted: u64,
    packets_received: u64,
    total_packets_received: u64,
    packets_transmitted: u64,
    total_packets_transmitted: u64,
    errors_on_received: u64,
    total_errors_on_received: u64,
    errors_on_transmitted: u64,
    total_errors_on_transmitted: u64,
    mac_address: MacAddr,
    mac_address_str: String,
}

impl Network {
    pub fn new(name: &str, network_data: &sysinfo::NetworkData) -> Self {
        Network {
            interface_name: name.to_string(),
            received: network_data.received(),
            total_received: network_data.total_received(),
            transmitted: network_data.transmitted(),
            total_transmitted: network_data.total_transmitted(),
            packets_received: network_data.packets_received(),
            total_packets_received: network_data.total_packets_received(),
            packets_transmitted: network_data.packets_transmitted(),
            total_packets_transmitted: network_data.total_packets_transmitted(),
            errors_on_received: network_data.errors_on_received(),
            total_errors_on_received: network_data.total_errors_on_received(),
            errors_on_transmitted: network_data.errors_on_transmitted(),
            total_errors_on_transmitted: network_data.total_errors_on_transmitted(),
            mac_address: network_data.mac_address().into(),
            mac_address_str: network_data.mac_address().to_string(),
        }
    }
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Component {
    temperature: f32,
    max: f32,
    critical: Option<f32>,
    label: String,
}

impl From<&sysinfo::Component> for Component {
    fn from(component: &sysinfo::Component) -> Self {
        Component {
            temperature: component.temperature(),
            max: component.max(),
            critical: component.critical(),
            label: component.label().to_string(),
        }
    }
}

pub type Uid = String;
pub type Gid = String;
pub type Pid = u32;

#[derive(Debug, Serialize, Deserialize)]
pub struct Process {
    name: String,
    cmd: Vec<String>,
    exe: Option<PathBuf>,
    pid: Pid,
    environ: Vec<String>,
    cwd: Option<PathBuf>,
    root: Option<PathBuf>,
    memory: u64,
    virtual_memory: u64,
    parent: Option<Pid>,
    status: ProcessStatus,
    start_time: u64,
    run_time: u64,
    cpu_usage: f32,
    disk_usage: DiskUsage,
    user_id: Option<Uid>,
    effective_user_id: Option<Uid>,
    group_id: Option<Gid>,
    effective_group_id: Option<Gid>,
    session_id: Option<Pid>,
}

impl From<&sysinfo::Process> for Process {
    fn from(proc: &sysinfo::Process) -> Self {
        Process {
            name: proc.name().to_string(),
            cmd: proc.cmd().to_vec(),
            exe: proc.exe().map(|exe| exe.into()),
            pid: proc.pid().as_u32(),
            environ: proc.environ().to_vec(),
            cwd: proc.cwd().map(|cwd| cwd.into()),
            root: proc.root().map(|root| root.into()),
            memory: proc.memory(),
            virtual_memory: proc.virtual_memory(),
            parent: proc.parent().map(|parent| parent.as_u32()),
            status: proc.status().into(),
            start_time: proc.start_time(),
            run_time: proc.run_time(),
            cpu_usage: proc.cpu_usage(),
            disk_usage: proc.disk_usage().into(),
            user_id: proc.user_id().map(|uid| uid.to_string()),
            effective_user_id: proc.effective_user_id().map(|uid| uid.to_string()),
            group_id: proc.group_id().map(|gid| gid.to_string()),
            effective_group_id: proc.effective_group_id().map(|gid| gid.to_string()),
            session_id: proc.session_id().map(|session_id| session_id.as_u32()),
        }
    }
}

#[derive(Debug, Serialize, Deserialize)]
pub enum BatteryState {
    Unknown,
    Charging,
    Discharging,
    Empty,
    Full,
}

impl From<starship_battery::State> for BatteryState {
    fn from(state: starship_battery::State) -> Self {
        match state {
            starship_battery::State::Unknown => BatteryState::Unknown,
            starship_battery::State::Charging => BatteryState::Charging,
            starship_battery::State::Discharging => BatteryState::Discharging,
            starship_battery::State::Empty => BatteryState::Empty,
            starship_battery::State::Full => BatteryState::Full,
        }
    }
}

#[derive(Debug, Serialize, Deserialize)]
pub enum Technology {
    Unknown,
    LithiumIon,
    LeadAcid,
    LithiumPolymer,
    NickelMetalHydride,
    NickelCadmium,
    NickelZinc,
    LithiumIronPhosphate,
    RechargeableAlkalineManganese,
}

impl From<starship_battery::Technology> for Technology {
    fn from(tech: starship_battery::Technology) -> Self {
        match tech {
            starship_battery::Technology::Unknown => Technology::Unknown,
            starship_battery::Technology::LithiumIon => Technology::LithiumIon,
            starship_battery::Technology::LeadAcid => Technology::LeadAcid,
            starship_battery::Technology::LithiumPolymer => Technology::LithiumPolymer,
            starship_battery::Technology::NickelMetalHydride => Technology::NickelMetalHydride,
            starship_battery::Technology::NickelCadmium => Technology::NickelCadmium,
            starship_battery::Technology::NickelZinc => Technology::NickelZinc,
            starship_battery::Technology::LithiumIronPhosphate => Technology::LithiumIronPhosphate,
            starship_battery::Technology::RechargeableAlkalineManganese => {
                Technology::RechargeableAlkalineManganese
            }
            _ => Technology::Unknown,
        }
    }
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Battery {
    state_of_charge: f32,
    energy: f32,
    energy_full: f32,
    energy_full_design: f32,
    energy_rate: f32,
    voltage: f32,
    state_of_health: f32,
    state: BatteryState,
    technology: Technology,
    temperature_kelvin: Option<f32>,
    temperature_celsius: Option<f32>,
    temperature_fahrenheit: Option<f32>,
    cycle_count: Option<u32>,
    vendor: Option<String>,
    model: Option<String>,
    serial_number: Option<String>,
    time_to_full: Option<f32>,
    time_to_empty: Option<f32>,
}

impl From<starship_battery::Battery> for Battery {
    fn from(battery: starship_battery::Battery) -> Self {
        let temp_kelvin = battery.temperature().map(|temp| temp.value);
        let temp_celsius = temp_kelvin.map(|temp| temp - 273.15);
        let temp_fahrenheit = temp_celsius.map(|temp| temp * 9.0 / 5.0 + 32.0);
        Battery {
            state_of_charge: battery.state_of_charge().value,
            energy: battery.energy().value,
            energy_full: battery.energy_full().value,
            energy_full_design: battery.energy_full_design().value,
            energy_rate: battery.energy_rate().value,
            voltage: battery.voltage().value,
            state_of_health: battery.state_of_health().value,
            state: battery.state().into(),
            technology: battery.technology().into(),
            temperature_kelvin: temp_kelvin,
            temperature_celsius: temp_celsius,
            temperature_fahrenheit: temp_fahrenheit,
            cycle_count: battery.cycle_count(),
            vendor: battery.vendor().map(|vendor| vendor.to_string()),
            model: battery.model().map(|model| model.to_string()),
            serial_number: battery
                .serial_number()
                .map(|serial_number| serial_number.to_string()),
            time_to_full: battery.time_to_full().map(|time| time.value),
            time_to_empty: battery.time_to_empty().map(|time| time.value),
        }
    }
}
