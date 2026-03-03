PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_sheeps` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`contact` text NOT NULL,
	`adress` text NOT NULL,
	`description` text NOT NULL,
	`role` text,
	`sexe` text,
	`created_at` integer
);
--> statement-breakpoint
INSERT INTO `__new_sheeps`("id", "name", "contact", "adress", "description", "role", "sexe", "created_at") SELECT "id", "name", "contact", "adress", "description", "role", "sexe", "created_at" FROM `sheeps`;--> statement-breakpoint
DROP TABLE `sheeps`;--> statement-breakpoint
ALTER TABLE `__new_sheeps` RENAME TO `sheeps`;--> statement-breakpoint
PRAGMA foreign_keys=ON;