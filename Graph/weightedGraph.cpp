#include <iostream>
#include <vector>

using namespace std;

class Graph {
public:
    int V;
    vector<vector<pair<int,int>>> adj; 

    Graph(int vertices) {
        V = vertices;
        adj.resize(V);
    }


    void addEdge(int u, int v, int w) {
        adj[u].push_back({v, w});
        adj[v].push_back({u, w}); 
    }


    void printGraph() {
        for (int i = 0; i < V; i++) {
            cout << i << " -> ";
            for (auto p : adj[i]) {
                cout << "(" << p.first << "," << p.second << ") ";
            }
            cout << endl;
        }
    }
};

int main() {
    Graph g(5);


    g.addEdge(0, 1, 10);
    g.addEdge(0, 4, 5);
    g.addEdge(1, 2, 1);
    g.addEdge(1, 3, 2);
    g.addEdge(1, 4, 7);
    g.addEdge(2, 3, 3);
    g.addEdge(3, 4, 4);

    g.printGraph();

    return 0;
}
