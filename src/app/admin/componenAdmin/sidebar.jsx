"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SidebarAdmin() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Tombol Hamburger (HP) */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-20 left-4 z-50 bg-blue-600 text-white p-2 rounded-lg shadow-lg"
      >
        ☰
      </button>

      {/* Background Hitam */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed top-16 left-0 bottom-0
          w-72
          bg-gray-600
          text-white
          px-4
          py-8
          z-50
          overflow-y-auto
          transform
          transition-transform
          duration-300

          ${
            open ? "translate-x-0" : "-translate-x-full"
          }

          lg:translate-x-0
        `}
      >
        {/* Tombol X */}
        <div className="flex justify-end lg:hidden mb-5">
          <button
            onClick={() => setOpen(false)}
            className="text-3xl"
          >
            ✕
          </button>
        </div>

        <ul className="space-y-4">

          {/* Dashboard */}
          <li>
            <button
              onClick={() => {
                router.push("/admin/profilAdmin");
                setOpen(false);
              }}
              className="w-full flex items-center gap-4 p-3 rounded-lg hover:bg-blue-600 transition"
            >
              🏠
              Dashboard
            </button>
          </li>

          {/* Tambah Order */}
          <li>
            <button
              onClick={() => {
                router.push("/admin/tambahPaket");
                setOpen(false);
              }}
              className="w-full flex items-center gap-4 p-3 rounded-lg hover:bg-blue-600 transition"
            >
              ➕
              Tambah Orderan
            </button>
          </li>

          {/* Daftar Order */}
          <li>
            <button
              onClick={() => {
                router.push("/admin/konfirmasi");
                setOpen(false);
              }}
              className="w-full flex items-center gap-4 p-3 rounded-lg hover:bg-blue-600 transition"
            >
              📋
              Daftar Orderan
            </button>
          </li>

          {/* Paket */}
          <li>
            <button
              onClick={() => {
                router.push("/admin/paket");
                setOpen(false);
              }}
              className="w-full flex items-center gap-4 p-3 rounded-lg hover:bg-blue-600 transition"
            >
              📦
              Paket / Layanan
            </button>
          </li>

          {/* Notifikasi */}
          <li>
            <button
              onClick={() => {
                router.push("/admin/notifikasi");
                setOpen(false);
              }}
              className="w-full flex items-center gap-4 p-3 rounded-lg hover:bg-blue-600 transition"
            >
              🔔
              Riwayat Notifikasi
            </button>
          </li>

          {/* Laporan */}
          <li>
            <button
              onClick={() => {
                router.push("/admin/laporan");
                setOpen(false);
              }}
              className="w-full flex items-center gap-4 p-3 rounded-lg hover:bg-blue-600 transition"
            >
              📊
              Laporan Keuangan
            </button>
          </li>

          {/* Pengaturan */}
          <li>
            <button
              onClick={() => {
                router.push("/admin/pengaturan");
                setOpen(false);
              }}
              className="w-full flex items-center gap-4 p-3 rounded-lg hover:bg-blue-600 transition"
            >
              ⚙️
              Pengaturan
            </button>
          </li>

          {/* Logout */}
          <li className="pt-4">
            <button
              onClick={() => {
                alert("Logout berhasil!");
                router.push("/");
                setOpen(false);
              }}
              className="w-full bg-red-500 hover:bg-red-600 rounded-lg py-3 font-semibold"
            >
              Logout
            </button>
          </li>

        </ul>
      </aside>
    </>
  );
}