CREATE TABLE `activities` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`icon` text NOT NULL,
	`text` text NOT NULL,
	`time` text NOT NULL,
	`created_at` integer
);
--> statement-breakpoint
CREATE TABLE `reports` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`date` text NOT NULL,
	`offering` integer NOT NULL,
	`dim` integer DEFAULT 0,
	`present` integer DEFAULT 0,
	`news` integer DEFAULT 0,
	`note` text
);
--> statement-breakpoint
ALTER TABLE `sheeps` ADD `sexe` text NOT NULL;