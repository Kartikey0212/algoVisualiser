# Pathfinding Visualizer
Conceptualized, created, developed and owned by - Kartikey Nigam.


Welcome to Pathfinding Visualizer! I built this application because I was fascinated by pathfinding algorithms, and I wanted to visualize them in action. I hope that you enjoy playing around with this visualization tool just as much as I enjoyed building it. You can access it here (use Google Chrome!): https://runman-algovisualizer.herokuapp.com

Note : The project contains an extensive 9 page tutorial at the beginning explaining all the features of the project and how to use them. Please feel free to go through that tutorial first if using the project for the first time.

**Highlights**
The project contains:
-> 8 Algorithms
-> 6 maze varieties
-> Objects such as : walls, rivers and flags.
-> Option to modulate animation speed between slow, medium and fast.
-> Real-time path visualization feature.

##Scree Capture
<img src="https://github.com/Kartikey0212/algoVisualiser/blob/main/c1.JPG" width="250" title="hover text">
<img src="https://github.com/Kartikey0212/algoVisualiser/blob/main/c2.JPG" width="250" title="hover text">

## Meet the Algorithms

This application supports the following algorithms: 

**Dijkstra's Algorithm** (weighted): the father of pathfinding algorithms; guarantees the shortest path

**A* Search** (weighted): arguably the best pathfinding algorithm; uses heuristics to guarantee the shortest path much faster than Dijkstra's Algorithm

**Greedy Best-first Search** (weighted): a faster, more heuristic-heavy version of A*; does not guarantee the shortest path

**Swarm Algorithm** (weighted): a mixture of Dijkstra's Algorithm and A*; does not guarantee the shortest-path

**Convergent Swarm Algorithm** (weighted): the faster, more heuristic-heavy version of Swarm; does not guarantee the shortest path

**Bidirectional Swarm Algorithm** (weighted): Swarm from both sides; does not guarantee the shortest path

**Breath-first Search** (unweighted): a great algorithm; guarantees the shortest path

**Depth-first Search** (unweighted): a very bad algorithm for pathfinding; does not guarantee the shortest path

On top of the pathfinding algorithms listed above, I implemented a **Recursive Division** Maze Generation algorithm. The best thing about this is that it generates a different maze every single time.

## More about the Swarm Algorithm

The Swarm Algorithm is an algorithm that I - at least presumably so - was unable to find anything close to it online. The algorithm is essentially a mixture of Dijkstra's Algorithm and A* Search; more precisely, while it converges to the target node like A* , it still explores quite a few neighboring nodes surrounding the start node like Dijkstra's. The algorithm differentiates itself from A* through its use of heuristics: it continually updates nodes' distance from the start node while taking into account their estimated distance from the target node. This effectively "balances" the difference in total distance between nodes closer to the start node and nodes closer to the target node, which results in the triangle-like shape of the Swarm Algorithm. We named the algorithm "Swarm" because one of its potential applications could be seen in a video-game where a character must keep track of a boss with high priority (the target node), all the while keeping tracking of neighboring enemies that might be swarming nearby. 