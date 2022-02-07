// 그래프의 정점을 저장할 Vertex 클래스
class Vertex {
  constructor(label) {
    this.label = label;
  }
}

// 그래프의 간선 인접 리스트로 표현 / 인접 리스트가 뭔데?
class Graph {
  constructor(v) {
    this.vertices = v;
    this.edges = 0;
    this.adj = Array(v)
      .fill(0)
      .map((el) => []);
  }
  addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.edges++;
  }
  showGraph() {
    this.adj.forEach((el, idx) => {
      let result = `${idx} -> `;
      for (let i = 0; i < el.length; i++) {
        result += `${el[i]} `;
      }
      console.log(result);
    });
  }
}
let g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();
