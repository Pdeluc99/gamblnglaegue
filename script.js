// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Functions to initialize the forms and leaderboard will be called here
    initializeGameForm();
    initializePredictionForm();
    updateLeaderboard();
});

function initializeGameForm() {
    // TODO: Implement function to dynamically generate game input fields
}

function initializePredictionForm() {
    // TODO: Implement function to dynamically generate prediction fields
}

function updateLeaderboard() {
    // TODO: Implement function to update leaderboard dynamically
}
// script.js

// Function to submit new game data
async function submitGameFormData(gamesData) {
    try {
        const response = await fetch('/game', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(gamesData),
        });
        const data = await response.json();
        if (response.ok) {
            console.log(data.message);
            // Refresh the games list on the UI
            getGamesList();
        } else {
            console.error(data.errors);
        }
    } catch (error) {
        console.error('Failed to submit game data', error);
    }
}

// Function to fetch the games list
async function getGamesList() {
    try {
        const response = await fetch('/games');
        const games = await response.json();
        if (response.ok) {
            // Update the UI with the games list
            displayGamesList(games);
        } else {
            console.error('Failed to fetch games');
        }
    } catch (error) {
        console.error('Failed to fetch games', error);
    }
}

// Function to submit user predictions
async function submitPredictions(predictions) {
    try {
        const response = await fetch('/prediction', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(predictions),
        });
        const data = await response.json();
        if (response.ok) {
            console.log(data.message);
            // Refresh the leaderboard on the UI
            getLeaderboard();
        } else {
            console.error(data.errors);
        }
    } catch (error) {
        console.error('Failed to submit predictions', error);
    }
}

// Function to get the leaderboard
async function getLeaderboard() {
    try {
        const response = await fetch('/leaderboard');
        const leaderboardData = await response.json();
        if (response.ok) {
            // Update the UI with the leaderboard data
            displayLeaderboard(leaderboardData);
        } else {
            console.error('Failed to fetch leaderboard');
        }
    } catch (error) {
        console.error('Failed to fetch leaderboard', error);
    }
}

// Functions to update the UI: displayGamesList, displayLeaderboard will need to be implemented
