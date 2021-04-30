import { useState } from 'react';
import { useHistory } from "react-router-dom";




const useModal = () => {
  let history = useHistory();

  // const [showingComic, setShowingComic] = useHistory();

  const [isShowing, setIsShowing] = useState(false);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return {
    isShowing,
    toggle,

  }
};

export default useModal;