-- Portfolio MySQL schema and seed data
-- Use this file to recreate the portfolio database structure and sample records.

CREATE DATABASE IF NOT EXISTS `portfolio_db`;
USE `portfolio_db`;

CREATE TABLE IF NOT EXISTS portfolios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(150) NOT NULL,
  tagline VARCHAR(255),
  location VARCHAR(150),
  email VARCHAR(100),
  phone VARCHAR(50),
  linkedin_url TEXT,
  profile_image_url TEXT,
  summary TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS portfolio_titles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  portfolio_id INT NOT NULL,
  title VARCHAR(150) NOT NULL,
  sort_order INT DEFAULT 0,
  FOREIGN KEY (portfolio_id) REFERENCES portfolios(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS experiences (
  id INT AUTO_INCREMENT PRIMARY KEY,
  portfolio_id INT NOT NULL,
  role VARCHAR(150) NOT NULL,
  company VARCHAR(150) NOT NULL,
  period VARCHAR(100) NOT NULL,
  logo_url TEXT,
  sort_order INT DEFAULT 0,
  FOREIGN KEY (portfolio_id) REFERENCES portfolios(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS experience_descriptions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  experience_id INT NOT NULL,
  description TEXT NOT NULL,
  sort_order INT DEFAULT 0,
  FOREIGN KEY (experience_id) REFERENCES experiences(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS projects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  portfolio_id INT NOT NULL,
  title VARCHAR(200) NOT NULL,
  category VARCHAR(150) NOT NULL,
  description TEXT NOT NULL,
  iframe_src TEXT,
  sort_order INT DEFAULT 0,
  FOREIGN KEY (portfolio_id) REFERENCES portfolios(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS project_links (
  id INT AUTO_INCREMENT PRIMARY KEY,
  project_id INT NOT NULL,
  name VARCHAR(150) NOT NULL,
  url TEXT NOT NULL,
  sort_order INT DEFAULT 0,
  FOREIGN KEY (project_id) REFERENCES projects(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS educations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  portfolio_id INT NOT NULL,
  degree VARCHAR(150) NOT NULL,
  institution VARCHAR(150) NOT NULL,
  period VARCHAR(100) NOT NULL,
  logo_url TEXT,
  details TEXT,
  sort_order INT DEFAULT 0,
  FOREIGN KEY (portfolio_id) REFERENCES portfolios(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS certifications (
  id INT AUTO_INCREMENT PRIMARY KEY,
  portfolio_id INT NOT NULL,
  title VARCHAR(255) NOT NULL,
  issuer VARCHAR(150) NOT NULL,
  date_obtained VARCHAR(100) NOT NULL,
  image_url TEXT,
  sort_order INT DEFAULT 0,
  FOREIGN KEY (portfolio_id) REFERENCES portfolios(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS organizations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  portfolio_id INT NOT NULL,
  role VARCHAR(150) NOT NULL,
  organization_name VARCHAR(255) NOT NULL,
  period VARCHAR(100) NOT NULL,
  sort_order INT DEFAULT 0,
  FOREIGN KEY (portfolio_id) REFERENCES portfolios(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS skill_categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  portfolio_id INT NOT NULL,
  category_name VARCHAR(150) NOT NULL,
  sort_order INT DEFAULT 0,
  FOREIGN KEY (portfolio_id) REFERENCES portfolios(id) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS skills (
  id INT AUTO_INCREMENT PRIMARY KEY,
  category_id INT NOT NULL,
  skill_name VARCHAR(150) NOT NULL,
  sort_order INT DEFAULT 0,
  FOREIGN KEY (category_id) REFERENCES skill_categories(id) ON DELETE CASCADE
);

INSERT IGNORE INTO portfolios (id, name, tagline, location, email, phone, linkedin_url, profile_image_url, summary)
VALUES
  (1, 'Afif Oktavian Syah Putra', 'Stay creative and innovative', 'Jakarta, Indonesia', 'afifoktaviansyahputra@gmail.com', '+6281228032747', 'https://www.linkedin.com/in/oktava8/', 'https://media.licdn.com/dms/image/v2/D5635AQE9PjqOhPnirQ/profile-framedphoto-shrink_200_200/B56Z1IPVMJGwAY-/0/1775033472055?e=1784703600&v=beta&t=odgAJ_cAHcKItep9c80_0HSnPSC434qni4ue78wbH2I', 'A recent Informatics graduate from Sebelas Maret University with hands-on experience as an IT Product Manager at detikcom and the Surakarta City Department of Communication, Informatics, Statistics, and Encryption. Skilled in product roadmap planning, product requirement documents (PRDs), Agile/Scrum, Figma design, stakeholder management, and IT consulting. Certified as a Google Project Manager and a Junior Network Administrator by BNSP, with a strong foundation in infrastructure and technical systems.');

INSERT IGNORE INTO portfolio_titles (id, portfolio_id, title, sort_order)
VALUES
  (1, 1, 'IT Product Manager Candidate', 1);

INSERT IGNORE INTO experiences (id, portfolio_id, role, company, period, logo_url, sort_order)
VALUES
  (1, 1, 'IT Product Manager Intern', 'PT Trans Digital Media (detikcom)', 'November 2025 - May 2026', 'https://media.licdn.com/dms/image/v2/C4D0BAQFUAgJugB7P_w/company-logo_100_100/company-logo_100_100/0/1631334240991?e=2147483647&v=beta&t=1tAC6tjWOR3Y5W1azFrg_Y1TUSj97AGp8cSInAqv0yk', 1),
  (2, 1, 'IT Product Manager Intern', 'Surakarta City Department of Communication, Informatics, Statistics, and Encryption (Diskominfo SP)', 'May 2025 - June 2025', 'https://diskominfosp.surakarta.go.id/displayFileFe/setting/caec177d-cff2-4d73-b496-c1426c126070.png', 2),
  (3, 1, 'Election Organizer Team (KPPS)', 'General Elections Commission of the Republic of Indonesia (KPU RI)', 'January 2024 - February 2024', 'https://media.licdn.com/dms/image/v2/C560BAQHSJVStwYgU1g/company-logo_100_100/company-logo_100_100/0/1630657568276?e=2147483647&v=beta&t=sFQ5UXj55A4ZDu0aNI6TkVMyAzZwrvjvFSGyi7dMOFg', 3);

INSERT IGNORE INTO experience_descriptions (id, experience_id, description, sort_order)
VALUES
  (1, 1, 'Managed the full lifecycle of IT products, covering development, quality assurance (QA), and technical implementation.', 1),
  (2, 1, 'Defined and maintained product roadmaps and backlogs to align development goals with business targets.', 2),
  (3, 1, 'Prepared Product Requirement Documents (PRDs) to ensure clear specifications between development and business teams.', 3),
  (4, 1, 'Conducted user research and competitor analysis to shape data-driven product strategies.', 4),
  (5, 1, 'Designed low-fidelity Figma wireframes to define user flows and automation processes.', 5),
  (6, 1, 'Created presentations for stakeholders and user guides to improve operational efficiency and product adoption.', 6),
  (7, 2, 'Translated user and government agency needs into technical specifications for the Surakarta Complaint Service Unit (ULAS) platform in line with Surakarta Mayor Regulation No. 8.1/2023.', 1),
  (8, 2, 'Applied Design Thinking to identify opportunities for system improvement through stakeholder consultation.', 2),
  (9, 2, 'Developed high-fidelity Figma prototypes and presented them to government officials to support human-centered product decisions in the public sector.', 3),
  (10, 3, 'Maintained public data integrity and transparency by managing digital data entry in real time using the Sirekap Mobile application.', 1),
  (11, 3, 'Directed polling station operations to comply with KPU regulations (PKPU No. 8/2022).', 2),
  (12, 3, 'Prepared, verified, and submitted official election result documentation accurately to the relevant authorities.', 3);

INSERT IGNORE INTO projects (id, portfolio_id, title, category, description, iframe_src, sort_order)
VALUES
  (1, 1, 'minidetik', 'Product Management', 'A product management project for minidetik (detikcom''s link-in-bio aggregator) completed during an internship at PT Trans Digital Media (detikcom). It produced a comprehensive Product Requirements Document (PRD) and an interactive prototype to validate the content aggregation workflow.', 'https://embed.figma.com/proto/Mxlu3vuZGCk75JRpJGMaIB/Wireframe-minidetik--detiknetwork-s-Link-in-Bio-?page-id=0%3A1&node-id=108-2&starting-point-node-id=108%3A2&show-proto-sidebar=1&embed-host=share', 1),
  (2, 1, 'Surakarta Complaint Service Unit (ULAS)', 'Product Management', 'Product design and management improvements for the ULAS platform during an internship at the Surakarta City Department of Communication, Informatics, Statistics, and Encryption. The project demonstrated how regulatory needs can be translated into an interactive interface prototype and presented through an official slideshow to the agency.', 'https://embed.figma.com/proto/XNQPbkSr7A5y2u8AfZZEqM/ULAS-Surakarta-v2?page-id=0%3A1&node-id=1-4&starting-point-node-id=1%3A4&embed-host=share', 2),
  (3, 1, 'Sirekap Mobile', 'Product Management', 'A comprehensive analysis and evaluation of the user interface (UI) and user experience (UX) of the Sirekap Mobile application using Design Thinking. Prepared as a thesis for a Bachelor of Informatics degree at Sebelas Maret University (UNS). It includes an academic report and an interactive evaluation prototype.', 'https://embed.figma.com/proto/a8m0v61sdR6KXOkixoDPlj/Prototype-Sirekap-Mobile-Skripsi?node-id=1-5&page-id=0%3A1&starting-point-node-id=1%3A5&embed-host=share', 3);

INSERT IGNORE INTO project_links (id, project_id, name, url, sort_order)
VALUES
  (1, 1, 'Read PRD', 'https://docs.google.com/document/d/1x6knJQGtRYcJDo56vQl0tvA4sEfxmNwK3HzUj5H8jsU/edit?usp=sharing', 1),
  (2, 2, 'View Presentation (Slideshow)', 'https://www.figma.com/deck/crfZR7zEI1rL4oxmv2W4bf/PPT-Seminar-Magang?node-id=85-961&t=Ahf4IhXBe0IKxBqA-1', 1),
  (3, 3, 'Read Thesis', 'https://drive.google.com/file/d/1YoSd0XaVtTohX8BXreJ7NQplL0lUrS7J/view?usp=sharing', 1);

INSERT IGNORE INTO educations (id, portfolio_id, degree, institution, period, logo_url, details, sort_order)
VALUES
  (1, 1, 'Bachelor of Computer Science (S.Kom)', 'Sebelas Maret University (UNS)', '2019 - 2025', 'https://uns.ac.id/id/wp-content/uploads/2023/06/cropped-logo-uns-biru-1-300x300.png', 'Major: Informatics. Thesis: Analysis and Evaluation of the User Interface (UI) and User Experience (UX) of the Sirekap Mobile Application Using Design Thinking (DT).', 1),
  (2, 1, 'Senior High School (SMA)', 'SMA Negeri 5 Purwokerto', '2016 - 2019', 'https://sman5purwokerto.sch.id/media_library/images/fa7abaacce41e19bc947041f56dcd237.png', 'Major: Natural Sciences (IPA).', 2),
  (3, 1, 'Junior High School (SMP)', 'SMP Negeri 8 Purwokerto', '2013 - 2016', 'https://smpn8purwokerto.sch.id/wp-content/uploads/2024/09/LOGO-SMP-8-NEW.png', '', 3),
  (4, 1, 'Elementary School (SD)', 'SD Terpadu Putra Harapan', '2007 - 2013', 'https://sd.putra-harapan.sch.id/favicon.jpg', '', 4);

INSERT IGNORE INTO certifications (id, portfolio_id, title, issuer, date_obtained, image_url, sort_order)
VALUES
  (1, 1, 'Google Project Management', 'Coursera (Google)', 'December 2025', 'https://media.licdn.com/dms/image/v2/D562DAQHr3QIIIM0nXg/profile-treasury-document-images_1280/B56Ztt8b08HAAU-/1/1767076119741?e=1784764800&v=beta&t=1uURF4KWPGr68CxT_NErkXQ9Yv_foL4x0SVk6uOb-DY', 1),
  (2, 1, 'Final Courses and Certificate Project Management', 'Digital Talent Scholarship (Digitalent)', 'December 2025', 'https://media.licdn.com/dms/image/v2/D562DAQHMBEsuJUfQkw/profile-treasury-document-cover-images_800/B56Ztt7IS8G0A8-/0/1767075778418?e=1784703600&v=beta&t=2_--gKjpE6LAmBi-1EMagkJbyXHS-ABSLPqbeOuQWcE', 2),
  (3, 1, 'Google AI Essentials', 'Coursera (Google)', 'November 2025', 'https://media.licdn.com/dms/image/v2/D562DAQF1vpfy4H53OQ/profile-treasury-document-cover-images_480/B56Zwiaje.HcBM-/0/1770103914803?e=1784703600&v=beta&t=_NiRApHjPl6JM1D8zMUVe3morDCdyHTxqZF-HcSV1Ho', 3),
  (4, 1, 'Project Management Intermediate', 'Digital Talent Scholarship (Digitalent)', 'November 2025', 'https://media.licdn.com/dms/image/v2/D562DAQFBkAjHswPyeg/profile-treasury-document-cover-images_480/B56Ztt88SnGwBI-/0/1767076253172?e=1784703600&v=beta&t=8UG8u-22qiyQiI6lGzkGClNCeVxHxFuJRF_RjnEBd5A', 4),
  (5, 1, 'Fundamental Project Management', 'Digital Talent Scholarship (Digitalent)', 'August 2025 - December 2025', 'https://media.licdn.com/dms/image/v2/D562DAQEG5Il6vsweeQ/profile-treasury-document-images_1280/B56ZjmuKs5G4AU-/1/1756217521663?e=1784764800&v=beta&t=xscEvt-1Gsk28ltbVrr8taex5SW25b-B9zvogfAxLic', 5),
  (6, 1, 'Junior Network Administrator', 'National Professional Certification Agency (BNSP)', 'June 2025', 'https://media.licdn.com/dms/image/v2/D562DAQF-gGWN20CgEQ/profile-treasury-document-cover-images_1920/B56ZiTy44bHkBM-/0/1754826250170?e=1784703600&v=beta&t=ucESyZWNfggIKthCjJ097-z8YahQiDE87nNZj-NK9xY', 6),
  (7, 1, 'Cybersecurity Essentials', 'Cisco Networking Academy', 'June 2024', 'https://media.licdn.com/dms/image/v2/D562DAQGa1sw8jVq-Hw/profile-treasury-document-cover-images_1280/profile-treasury-document-cover-images_1280/0/1719770984165?e=1784703600&v=beta&t=eiOadJIJNnr3WgSz4b7adzfzLiQlGNzZSaQeLiC45Uw', 7);

INSERT IGNORE INTO organizations (id, portfolio_id, role, organization_name, period, sort_order)
VALUES
  (1, 1, 'District Coordinator', 'Community Service Program (KKN), Sebelas Maret University', 'July - August 2024', 1),
  (2, 1, 'Public Relations Staff', 'UNS Esport Community (UNSEC), Sebelas Maret University', 'November 2021 - January 2023', 2),
  (3, 1, 'Treasurer', 'Pramuka UNS, Sebelas Maret University', 'January 2021 - January 2022', 3),
  (4, 1, 'Sponsorship Staff', 'Sebelas Maret Islamic Festival (SIFT), Sebelas Maret University', 'June - October 2020', 4),
  (5, 1, 'Logistics Staff', 'Expo UKM UNS, Sebelas Maret University', 'May - September 2020', 5),
  (6, 1, 'Public Relations Staff', 'Nurul Huda Congregation Student Islamic Activity Unit (JN UKMI UNS), Sebelas Maret University', 'January 2020 - January 2021', 6);

INSERT IGNORE INTO skill_categories (id, portfolio_id, category_name, sort_order)
VALUES
  (1, 1, 'Product & Project Management', 1),
  (2, 1, 'User Interface & User Experience (UI/UX)', 2),
  (3, 1, 'Business & Consulting', 3),
  (4, 1, 'Network Infrastructure', 4),
  (5, 1, 'Technical IT Skills', 5),
  (6, 1, 'Soft Skills & Languages', 6);

INSERT IGNORE INTO skills (id, category_id, skill_name, sort_order)
VALUES
  (1, 1, 'Product Roadmap', 1),
  (2, 1, 'Backlog Prioritization', 2),
  (3, 1, 'Product Requirements Document (PRD)', 3),
  (4, 1, 'Sprint Planning', 4),
  (5, 1, 'Agile/Scrum', 5),
  (6, 1, 'Waterfall', 6),
  (7, 1, 'Software Development Life Cycle (SDLC)', 7),
  (8, 1, 'QA Testing', 8),
  (9, 1, 'KPI/OKR', 9),
  (10, 1, 'Milestone Tracking', 10),
  (11, 1, 'Risk Management', 11),
  (12, 1, 'Go-to-Market', 12),
  (13, 1, 'Jira', 13),
  (14, 1, 'Trello', 14),
  (15, 1, 'Google Workspace', 15),
  (16, 2, 'Figma (Lo-Fi & Hi-Fi)', 1),
  (17, 2, 'Wireframing', 2),
  (18, 2, 'User Flow Mapping', 3),
  (19, 2, 'UI/UX Design', 4),
  (20, 2, 'User-Centered Design', 5),
  (21, 2, 'Human-Computer Interaction (HCI)', 6),
  (22, 2, 'Usability Testing', 7),
  (23, 3, 'Stakeholder Management', 1),
  (24, 3, 'User Research', 2),
  (25, 3, 'Competitor Analysis', 3),
  (26, 3, 'Design Thinking', 4),
  (27, 3, 'Business Requirements Analysis', 5),
  (28, 3, 'Gap Analysis', 6),
  (29, 3, 'Process Improvement', 7),
  (30, 3, 'Digital Transformation', 8),
  (31, 3, 'Data-Driven Decision Making', 9),
  (32, 3, 'Regulatory Compliance', 10),
  (33, 4, 'TCP/IP', 1),
  (34, 4, 'DNS & DHCP', 2),
  (35, 4, 'VLAN & Switch Configuration', 3),
  (36, 4, 'Routing (OSPF, BGP)', 4),
  (37, 4, 'LAN/WAN', 5),
  (38, 4, 'Wireless Networking', 6),
  (39, 4, 'Subnetting', 7),
  (40, 4, 'Firewall', 8),
  (41, 4, 'VPN', 9),
  (42, 4, 'Cisco', 10),
  (43, 5, 'Cloud Computing', 1),
  (44, 5, 'Cybersecurity', 2),
  (45, 5, 'Artificial Intelligence (AI) Literacy', 3),
  (46, 5, 'Software Engineering', 4),
  (47, 5, 'Database Management', 5),
  (48, 5, 'Mobile Application Development', 6),
  (49, 5, 'E-Commerce', 7),
  (50, 5, 'Distributed Systems', 8),
  (51, 5, 'Operating Systems', 9),
  (52, 6, 'Problem Solving', 1),
  (53, 6, 'Analytical Thinking', 2),
  (54, 6, 'Strategic Planning', 3),
  (55, 6, 'Cross-Functional Collaboration', 4),
  (56, 6, 'Leadership', 5),
  (57, 6, 'Indonesian (Native)', 6),
  (58, 6, 'English (Professional Working Proficiency)', 7);

-- Example query to fetch the portfolio data for the frontend
SELECT p.id,
       p.name,
       p.tagline,
       p.location,
       p.email,
       p.phone,
       p.linkedin_url,
       p.profile_image_url,
       p.summary
FROM portfolios p
ORDER BY p.id
LIMIT 1;
