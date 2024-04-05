from flask import Flask, jsonify, request
import sqlite3
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Configuration
DATABASE = 'data\RunningData.db'

# Function to connect to the database
def get_db():
    db = sqlite3.connect(DATABASE)
    return db
 
@app.route('/event', methods=['GET'])
def get_data():
    db = get_db()
    cursor = db.cursor()
    cursor.execute('SELECT * FROM EventDetails')
    data = cursor.fetchall()
    db.close()
    return jsonify(data)

@app.route('/event/<int:event_id>', methods=['GET'])
def get_event(event_id):
    db = get_db()
    cursor = db.cursor()
    cursor.execute('SELECT * FROM EventData WHERE EventID = ? LIMIT 100', (event_id,))
    data = cursor.fetchall()
    db.close()
    if data:
        return jsonify(data)
    else:
        abort(404, 'Event not found')


# API endpoint to handle form submission
@app.route('/submitEventData', methods=['POST'])
def submit_event_data():
    try:
        data = request.json
        name = data.get('name')
        date = data.get('date')
        city = data.get('city')
        # Insert form data into SQLite database
        db = get_db()
        cursor = db.cursor()
        cursor.execute("INSERT INTO EventDetails (EventName, EventDate ,EventCity,EventYear) VALUES (?, ?, ?, ?)", (name, str(date), city, str(date[0:4])))
        db.commit()

        return jsonify({'message': 'Form data inserted successfully'}), 200
    except Exception as e:
        return jsonify({'error': str(e)}), 500




##############################################################################################################
##############################################################################################################


# Run the application
if __name__ == '__main__':
    app.run(debug=True)
