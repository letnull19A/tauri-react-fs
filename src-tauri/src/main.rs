use std::fs;

// Prevents additional console window on Windows in release, DO NOT REMOVE!!
// #![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

#[tauri::command]
fn save_file(path: String, contents: String) {
    fs::write(path, contents).unwrap();
}

fn main() {
    // create_file("example.txt", "Hello, world!");
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![save_file])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
