import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, TextField } from "@mui/material";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addNote = () => {
    if (title.trim() === "" && content.trim() === "") return;
    const newNote = { id: Date.now(), title, content };
    setNotes([newNote, ...notes]);
    setTitle("");
    setContent("");
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center text-violet-600">
        My Notes
      </h1>

      <div className="max-w-lg mx-auto mb-6 p-6 bg-white rounded-xl shadow-md flex flex-col gap-4">
        <TextField
          label="Title"
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          className="mb-8"
        />
        <TextField
          label="Take a note..."
          variant="outlined"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          fullWidth
          multiline
          rows={4}
          className="mb-8"
        />
        <Button
          onClick={addNote}
          variant="contained"
          color="primary"
          fullWidth
        >
          Add Note
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {notes.map((note) => (
          <div
            key={note.id}
            className="bg-white p-4 rounded-xl shadow break-words"
          >
            <div className="flex justify-between items-start mb-2">
              <h2 className="font-bold text-lg sm:text-xl">{note.title}</h2>
              <Button
                onClick={() => deleteNote(note.id)}
                className="text-red-500 hover:text-red-700 p-0 min-w-0"
              >
                <DeleteIcon />
              </Button>
            </div>
            <p className="text-gray-700 text-sm sm:text-base">{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
