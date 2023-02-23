const { useState, useEffect } = require("react");
const { useSelector } = require("react-redux");

export default function useIsAthorized() {
  const { user, token } = useSelector((state) => state.auth);
  const [isAuthorized, setIsAuthorized] = useState(user && token);

  useEffect(() => {
    setIsAuthorized(user && token);
  }, [user, token]);

  return isAuthorized;
}
