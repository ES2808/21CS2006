from flask import Flask, jsonify
import time

app = Flask(__name__)
window_size = 10
numbers_window = []

# Mock data for number types
mock_data = {
    'p': [2, 3, 5, 7, 11],
    'f': [55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181],
    'e': [8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56],
    'r': [2, 19, 25, 7, 4, 24, 17, 27, 30, 21, 14, 10, 23]
}

def fetch_numbers(numberid):
    # Simulate async operation with mock data
    time.sleep(0.1)
    return mock_data.get(numberid, [])

def calculate_average(numbers):
    if not numbers:
        return 0.0
    return sum(numbers) / len(numbers)

@app.route('/numbers/<numberid>', methods=['GET'])
def get_numbers(numberid):
    if numberid not in mock_data:
        return jsonify({"error": "Invalid number ID"}), 400

    new_numbers = fetch_numbers(numberid)

    prev_state = list(numbers_window)

    # Add new numbers to the window, ensuring uniqueness
    for num in new_numbers:
        if num not in numbers_window:
            numbers_window.append(num)

    # Trim the window to the specified size
    while len(numbers_window) > window_size:
        numbers_window.pop(0)

    curr_state = list(numbers_window)
    avg = calculate_average(curr_state)

    response = {
        "windowPrevState": prev_state,
        "windowCurrState": curr_state,
        "numbers": new_numbers,
        "avg": round(avg, 2)
    }

    return jsonify(response)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=9876)
