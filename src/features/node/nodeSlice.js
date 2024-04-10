import { createSlice } from "@reduxjs/toolkit";

const graphSlice = createSlice({
  name: "graph",
  initialState: {
    nodes: [],
    branches: [],
  },
  reducers: {
    addNode(state, action) {
      state.nodes.push(action.payload);
    },
    removeNode(state, action) {
      const nodeIdToRemove = action.payload;
      state.nodes = state.nodes.filter((node) => node.id !== nodeIdToRemove);
    },
    addBranch(state, action) {
      state.branches.push(action.payload);
    },
    removeBranch(state, action) {
      const branchIdToRemove = action.payload[0].id;
      console.log(branchIdToRemove);
      state.branches = state.branches.filter((branch) => {
        let id = `reactflow__edge-${branch.source}-${branch.target}`;
        return id !== branchIdToRemove;
      });
    },
  },
});

export const { addNode, removeNode, addBranch, removeBranch } =
  graphSlice.actions;
export default graphSlice.reducer;
