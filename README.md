<h1>Tic-Tac-Toe</h1>

<p>A classic Tic-Tac-Toe game built using React and styled with Tailwind CSS. This project includes options to play against another player or a computer with AI capabilities.</p>

<h2 id="demo">Demo</h2>
<p><video width="600" controls>
  <source src="tictactoe.mov" type="video/quicktime">
  Your browser does not support the video tag.
</video></p>
<a href="https://tic-tac-toe-gold-phi.vercel.app/">Give it a try!</a>

<h2 id="features">Features</h2>
<ul>
  <li><strong>Two Player Mode:</strong> Play against another player.</li>
  <li><strong>Computer Mode:</strong> Play against the computer with an AI that uses the Minimax algorithm.</li>
  <li><strong>Responsive Design:</strong> Works well on both desktop and mobile devices.</li>
  <li><strong>Tailwind CSS:</strong> Stylish and modern design with Tailwind CSS.</li>
</ul>

<h2 id="installation">Installation</h2>
<p>To run this project locally, follow these steps:</p>
<ol>
  <li><strong>Clone the repository:</strong></li>
  <pre><code>git clone https://github.com/sarahtoninwrites/tic-tac-toe.git
cd tic-tac-toe</code></pre>
  <li><strong>Install dependencies:</strong></li>
  <pre><code>npm install</code></pre>
  <li><strong>Start the development server:</strong></li>
  <pre><code>npm start</code></pre>
  <p>The app will be available at <code>http://localhost:3000</code>.</p>
</ol>

<h2 id="usage">Usage</h2>
<ol>
  <li><strong>Choose the game mode:</strong>
    <ul>
      <li><strong>Two Player:</strong> Both players take turns to play.</li>
      <li><strong>Computer:</strong> Play against an AI-powered computer opponent.</li>
    </ul>
  </li>
  <li><strong>Play the game:</strong>
    <ul>
      <li>Click on an empty square to place your mark (X or O).</li>
      <li>The game will announce the winner or a draw when the game ends.</li>
      <li>Click "Start Over" to reset the game and play again.</li>
    </ul>
  </li>
</ol>

<h2 id="ai-implementation">AI Implementation</h2>
<p>The computer opponent uses the Minimax algorithm to determine the best move. The AI aims to either win the game or force a draw if winning is impossible.</p>

<h2 id="contributing">Contributing</h2>
<p>Contributions are welcome! Follow these steps to contribute:</p>
<ol>
  <li><strong>Fork the repository.</strong></li>
  <li><strong>Create a new branch:</strong></li>
  <pre><code>git checkout -b feature-name</code></pre>
  <li><strong>Make your changes and commit them:</strong></li>
  <pre><code>git commit -m 'Add some feature'</code></pre>
  <li><strong>Push to the branch:</strong></li>
  <pre><code>git push origin feature-name</code></pre>
  <li><strong>Create a pull request.</strong></li>
</ol>

<h2 id="acknowledgements">Stack</h2>
<ul>
  <li><a href="https://reactjs.org/">React</a> - A JavaScript library for building user interfaces.</li>
  <li><a href="https://tailwindcss.com/">Tailwind CSS</a> - A utility-first CSS framework for rapid UI development.</li>
  <li><a href="https://create-react-app.dev/">Create React App</a> - Set up a modern web app by running one command.</li>
  <li><a href="https://en.wikipedia.org/wiki/Minimax">Minimax Algorithm</a> - An algorithm used in decision making and game theory.</li>
</ul>
