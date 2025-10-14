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

    void addEdge(int u, int v){
        adj[u].push_back(v);
    }

    void printGraph(){
        for(int i = 0; i < V; i++){
            cout<< i << ": ";
            cout<<"[ ";
            for(int j = 0; j < adj[i].size(); j++){
                cout<<adj[i][j]<<" ";
            }
            cout<<"]";
            cout<<endl;
        }
    }

};

 int main(){
        Graph g(5);
        g.addEdge(0,1);
        g.addEdge(0,2);
        g.addEdge(4,1);
        g.addEdge(2,1);
        g.addEdge(4,3);
        g.addEdge(2,4);

        g.printGraph();

return 0;

    }