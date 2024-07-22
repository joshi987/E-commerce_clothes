import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUserProfile, loginOut } from '../../../services/authServices';
import { SET_LOGIN, SET_NAME, SET_USER } from '../../redux/feature/authSlice';
import { useNavigate } from 'react-router-dom';
import useRedirectLoggedOutUser from '../../../customHooks/useRedirectLoggedOutUser';

function UserData() {
  const dispatch = useDispatch();
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    async function getUserData() {
      const data = await getUserProfile();
      console.log(data);
      setProfile(data);
      setIsLoading(false);
      await dispatch(SET_USER(data));
      await dispatch(SET_NAME(data));
    }
    getUserData();
  }, [dispatch]);

  const logout = async () => {
    await loginOut();
    await dispatch(SET_LOGIN(false));
    navigate("/sign");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="text-center mb-6">
          <img src={profile?.photo} alt="Profile" className="mx-auto mb-4 w-24 h-24 rounded-full" />
          <h1 className="text-xl font-bold text-gray-800">Welcome, {profile?.name}</h1>
          <p className="text-sm text-gray-600">{profile?.email}</p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={logout}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserData;
