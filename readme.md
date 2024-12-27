# HTML Editor JS

This project is a simple JavaScript application that enables the possibility to edit HTML pages using a hide/show button.

## Features

- Toggle between view and edit mode for HTML content.
- Lightweight and easy to integrate into existing projects.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/bostick23/htmleditor_js.git
    ```
2. Navigate to the project directory:
    ```sh
    cd htmleditor_js
    ```

## Usage

1. Include the JavaScript file in your HTML:
    ```html
    <script src="js/editor.js"></script>
    ```
2. Add the hide/show button and the content you want to edit:
    ```html
    <button id="toggleEdit">Edit</button>
    <div id="editable">
        <!-- Your HTML content here -->
    </div>
    ```
3. Initialize the editor in your JavaScript:
    ```javascript
    document.getElementById('toggleEdit').addEventListener('click', function() {
        if (this.innerHTML === "Start editing") {
            this.innerHTML = "Stop editing";
            startEditing();
          } else {
            this.innerHTML = "Start editing";
            stopEditing();
          }
    });
    ```

## Example

Open demo.html to show an example of usage.

## License

This project is licensed under the MIT License.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## Contact

For any questions or suggestions, please contact [bostick23@gmail.com](mailto:bostick23@gmail.com).
