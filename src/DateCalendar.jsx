import { useState } from 'react';
import { X, Plus, Trash2 } from 'lucide-react';
import './DateCalendar.css';

export default function CalendarNotesApp() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [sidebar, setSidebar] = useState(false);
  const [modal, setModal] = useState(false);
  const [newNote, setNewNote] = useState({ 
    title: '', 
    description: '', 
    date: new Date().toISOString().split('T')[0]
  });
  const [notes, setNotes] = useState([]);

  const CustomCalendar = () => {
    const daysInMonth = new Date(
      selectedDate.getFullYear(), 
      selectedDate.getMonth() + 1, 
      0
    ).getDate();
    const firstDayOfMonth = new Date(
      selectedDate.getFullYear(), 
      selectedDate.getMonth(), 
      1
    ).getDay();

    const renderCalendar = () => {
      const days = [];
      
      for (let i = 0; i < firstDayOfMonth; i++) {
        days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
      }

      for (let day = 1; day <= daysInMonth; day++) {
        const currentDate = new Date(
          selectedDate.getFullYear(), 
          selectedDate.getMonth(), 
          day
        );
        const dateString = currentDate.toISOString().split('T')[0];
        const hasNotes = notes.some(note => note.date === dateString);

        days.push(
          <div 
            key={day} 
            className={`calendar-day ${hasNotes ? 'has-notes' : ''}`}
            onClick={() => {
              setSelectedDate(currentDate);
              setSidebar(true);
            }}
          >
            {day}
          </div>
        );
      }

      return days;
    };

    const changeMonth = (delta) => {
      const newDate = new Date(selectedDate);
      newDate.setMonth(newDate.getMonth() + delta);
      setSelectedDate(newDate);
    };

    return (
      <div className="custom-calendar">
        <div className="calendar-header">
          <button onClick={() => changeMonth(-1)}>{'<'}</button>
          <h2>
            {selectedDate.toLocaleString('default', { month: 'long' })} {' '}
            {selectedDate.getFullYear()}
          </h2>
          <button onClick={() => changeMonth(1)}>{'>'}</button>
        </div>
        <div className="calendar-weekdays">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="calendar-weekday">{day}</div>
          ))}
        </div>
        <div className="calendar-days">
          {renderCalendar()}
        </div>
      </div>
    );
  };

  const handleAddNote = () => {
    if (newNote.title.trim() || newNote.description.trim()) {
      setNotes([...notes, { 
        ...newNote, 
        id: Date.now(),
        date: selectedDate.toISOString().split('T')[0]
      }]);
      setNewNote({ title: '', description: '', date: selectedDate.toISOString().split('T')[0] });
      setModal(false);
    }
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const filteredNotes = notes.filter(note => 
    note.date === selectedDate.toISOString().split('T')[0]
  );

  return (
    <div className="calendar-notes-container">
      <div className="calendar-section">
        <CustomCalendar />
      </div>

      {sidebar && (
        <div className="notes-sidebar">
          <div className="notes-sidebar-header">
            <h2>{selectedDate.toLocaleDateString()}</h2>
            <button 
              className="add-note-btn" 
              onClick={() => setModal(true)}
            >
              <Plus /> Add Note
            </button>
            <button 
              className="close-sidebar-btn" 
              onClick={() => setSidebar(false)}
            >
              <X />
            </button>
          </div>

          <div className="notes-list">
            {filteredNotes.length === 0 ? (
              <p className="no-notes">No notes for this day</p>
            ) : (
              filteredNotes.map((note) => (
                <div key={note.id} className="note-item">
                  <div className="note-content">
                    <h3>{note.title}</h3>
                    <p>{note.description}</p>
                  </div>
                  <button 
                    className="delete-note-btn"
                    onClick={() => handleDeleteNote(note.id)}
                  >
                    <Trash2 />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      )}

      {modal && (
        <div className="note-modal">
          <div className="note-modal-content">
            <div className="modal-header">
              <h2>Add New Note</h2>
              <button 
                className="close-modal-btn"
                onClick={() => setModal(false)}
              >
                <X />
              </button>
            </div>
            <div className="modal-body">
              <label>
                Title
                <input 
                  type="text" 
                  value={newNote.title}
                  onChange={(e) => setNewNote({
                    ...newNote, 
                    title: e.target.value
                  })}
                  placeholder="Enter note title"
                />
              </label>
              <label>
                Description
                <textarea 
                  value={newNote.description}
                  onChange={(e) => setNewNote({
                    ...newNote, 
                    description: e.target.value
                  })}
                  placeholder="Enter note description"
                ></textarea>
              </label>
              <button 
                className="save-note-btn"
                onClick={handleAddNote}
              >
                Save Note
              </button>
            </div>
          </div>
        </div>
      )}

      {/* <div className="nav">
        <h1>CALENDAR</h1>
      </div> */}
    </div>
  );
}
