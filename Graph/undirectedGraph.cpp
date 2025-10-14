
#include <iostream>
#include <vector>
using namespace std;

class Graph
{
public:
    int V;
    vector<vector<int>> adj;

    Graph(int vertices)
    {
        V = vertices;
        adj.resize(V);
    }

    void addEdge(int u, int v)
    {
        adj[v].push_back(u);
        adj[u].push_back(v); 
    }

    void printGraph()
    {
        for (int i = 0; i < V; i++)
        {
            cout << i << ": ";
            cout<<"[ ";

            for (int val : adj[i])
            {
                cout << val<<" ";
            }
            cout<<"]";
            cout << endl;
        }
    }
};

int main()
{
    Graph g(5);
    g.addEdge(0, 1);
    g.addEdge(1, 2);
    g.addEdge(2, 0);
    g.addEdge(1, 4);
    g.addEdge(2, 3);
    g.addEdge(0, 4);

    g.printGraph();

    return 0;
}
