ALTER TABLE `reports` ADD `type` text NOT NULL;--> statement-breakpoint
ALTER TABLE `reports` ADD `title` text NOT NULL;--> statement-breakpoint
ALTER TABLE `reports` ADD `description` text;--> statement-breakpoint
ALTER TABLE `reports` ADD `auteur` text;--> statement-breakpoint
ALTER TABLE `reports` DROP COLUMN `note`;