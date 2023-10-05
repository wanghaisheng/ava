-- 
-- IMPORTANT:
-- Table names need to be quoted in order to work with our migration tool.
--
CREATE TABLE "Prompt" (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  prompt TEXT NOT NULL
) STRICT;

CREATE TABLE "Chat" (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  system_prompt TEXT
) STRICT;

CREATE TABLE "ChatMessage" (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  chat_id INTEGER NOT NULL,
  role TEXT NOT NULL,
  content TEXT NOT NULL,
  FOREIGN KEY (chat_id) REFERENCES Chat(id) ON DELETE CASCADE
) STRICT;