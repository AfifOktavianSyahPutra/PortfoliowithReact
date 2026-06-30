import React from 'react';

const Navbar = () => {
  return (
    <header>
      <nav className="navigasi" aria-label="Navigasi Utama">
        <div className="logo-navigasi">
          Afif<span>.</span>
        </div>
        <ul className="tautan-navigasi">
          <li><a href="#tentang">Tentang</a></li>
          <li><a href="#pengalaman">Pengalaman</a></li>
          <li><a href="#proyek">Proyek</a></li>
          <li><a href="#keahlian">Keahlian</a></li>
          <li><a href="#pendidikan">Pendidikan</a></li>
        </ul>
        <a href="#kontak" className="tombol">Hubungi Saya</a>
      </nav>
    </header>
  );
};

export default Navbar;
