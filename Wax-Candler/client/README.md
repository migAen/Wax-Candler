# Wax Candler

Wax Candler is a web-based application designed for creating custom wax candles. This project allows users to design their candles by selecting materials such as wax, fragrance, colorants, and equipment. It also offers an easy-to-use interface for creating unique, personalized candles.

## Features

- **Candle Creator**: Allows users to create custom candles by selecting various materials.
- **Materials**:
  - **Waxes**: Choose from a variety of wax options.
  - **Fragrances**: Select different fragrances to add to your candles.
  - **Colorants**: Pick from a range of colorants to customize the candle's color.
  - **Equipment**: Browse equipment options for the candle-making process.
- **Premade Fragrances**: Explore premade fragrance options for ready-to-use blends.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Dependencies](#dependencies)
- [Contributing](#contributing)

## Installation

To get started with Wax Candler, follow the steps below:

### Prerequisites

- **Node.js**: Make sure you have Node.js installed on your machine. If you don't have it, you can download it from [nodejs.org](https://nodejs.org/).

### Steps to Run Locally

Follow these steps to set up and run the project locally:

1. **Clone the Repository**
   - Open your terminal and run the following command to clone the repository to your local machine:
   ```bash
   git clone https://github.com/migAen/Wax-Candler.git
   ```
2. **Navigate to the Project Directory**
   - Change to the project directory:
   ```bash
   cd wax-candler
   ```
3. **Install Dependencies**
   - Run the following command to install all required dependencies:
   ```bash
   npm install
   ```
4. **Run the App**
   - Run the app with:
   ```bash
   npm run dev
   ```
5. **Open the App in Your Browser**
   - Once the app is running, open your browser and go to:
   ```bash
   http://localhost:5173
   ```
6. **Make Changes and Refresh**
   - As you make changes to the app, Vite will automatically reload the page in your browser to reflect those updates.
   - Simply save your changes, and the app will update in real-time.

## Usage

Once the app is running locally, you can explore the following sections:

1. **Candle Creator**: Go to the "Candle Creator" page to begin designing your custom candle. In this section, you can:
   - **Design the amount of wax and fragrance needed** for your candle.
   - **Select the fragrances** that will be added to your candle.
   - **Mix colors using colorants** to customize the color of your candle.

2. **Materials**: Explore available waxes, fragrances, colorants, and equipment in the "Materials" dropdown.

3. **Premade Fragrances**: Navigate to this section to view and select premade fragrance blends for your candles.

## Dependencies

The project uses the following key dependencies:

- **React**: The core library for building user interfaces.
- **React Router**: For handling page navigation.
- **Bootstrap**: For responsive design and UI components.
- **Vite**: A build tool that provides a fast development environment.

These dependencies can be found in the `package.json` file.

## Contributing

Contributions are welcome! If you'd like to help, please follow these steps:

1. **Fork the repository**: Click the "Fork" button in the upper-right corner of the repository page to create your own copy of the project.
2. **Create a new branch**: After forking the repository, create a new branch to make your changes:

   ```bash
   git switch -c my-feature-branch

   ```

3. **Make the necessary modifications**: Implement the changes or add new features to the codebase.

4. **Commit your changes**: After making your updates, commit them with a descriptive message that explains the purpose of your modifications:

   ```bash
   git commit -am 'Implement new feature'

   ```

5. **Push your changes**: Push the changes from your local branch to your forked repository:

   ```bash
   git push origin my-feature-branch

   ```

6. **Create a pull request**: Open a pull request on the main repository with your changes.
