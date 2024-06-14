
import create from 'zustand';

const useStore = create((set) => ({
  username: '',
  userData: null,
  setUsername: (username) => set({ username }),
  setUserData: (userData) => set({ userData }),
}));

export default useStore;
