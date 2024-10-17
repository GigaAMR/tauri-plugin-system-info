#[cfg_attr(mobile, tauri::mobile_entry_point)]
use tauri::Manager;
use tauri_plugin_system_info::utils::{SysInfo, SysInfoState};
use tauri_plugin_system_info::commands;
use tauri_plugin_system_info::model::Cpu;

#[tauri::command]
fn cpu_count() -> Result<usize, String> {
    let state = SysInfoState::default();
    let sysinfo = state.sysinfo.lock().unwrap();
    let cpu_count = sysinfo.cpu_count();
    Ok(cpu_count)
}

pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_system_info::init())
        .invoke_handler(tauri::generate_handler![
            cpu_count
        ])
        .setup(|app| {
            #[cfg(debug_assertions)] // only include this code on debug builds
            {
                let window = app.get_webview_window("main").unwrap();
                window.open_devtools();
            }
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
