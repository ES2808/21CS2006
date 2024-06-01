from flask import Flask, jsonify
import time

app = Flask(__name__)
WINDOW_SIZE = 10
number_window = []

# Mock data for different number types
mock_numbers = {
    'p': [2, 3, 5, 7, 11],
    'f': [55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181],
    'e': [8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56],
    'r': [2, 19, 25, 7, 4, 24, 17, 27, 30, 21, 14, 10, 23]
}

def get_mock_numbers(type_id):
    time.sleep(0.1)  # Simulate a delay
    return mock_numbers.get(type_id, [])

def compute_average(numbers):
    if not numbers:
        return 0.0
    return sum(numbers) / len(numbers)

@app.route('/numbers/<type_id>', methods=['GET'])
def fetch_numbers(type_id):
    if type_id not in mock_numbers:
        return jsonify({"error": "Invalid number type"}), 400

    fetched_numbers = get_mock_numbers(type_id)
    previous_state = number_window.copy()

    # Update the window with new numbers ensuring no duplicates
    for num in fetched_numbers:
        if num not in number_window:
            number_window.append(num)

    # Maintain the window size limit
    while len(number_window) > WINDOW_SIZE:
        number_window.pop(0)

    current_state = number_window.copy()
    average = compute_average(current_state)

    response = {
        "windowPrevState": previous_state,
        "windowCurrState": current_state,
        "numbers": fetched_numbers,
        "avg": round(average, 2)
    }

    return jsonify(response)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=9876)
