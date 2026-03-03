CREATE TABLE `rapports` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text,
	`type` text,
	`description` text,
	`date` text,
	`offering` text,
	`dim` integer DEFAULT 0,
	`present` integer DEFAULT 0,
	`news` integer DEFAULT 0,
	`auteur` text
);
