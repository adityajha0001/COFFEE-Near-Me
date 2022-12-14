const useTrackLocation =() =>{

    const [locationErrorMsg, setLocationErrorMsg] = useState("");
    const [latlong, setLatLong] = useState("");

    const success = (position) => {
         const latitude = position.coords.latitude;
         const longitude = position.coords.longitude;

         setLatLong(`${latitude},${longitude}`);
    };

    const error = () => {
        setLocationErrorMsg("Unable to retrieve your location");

    };

    const handleTrackLocation = () => {
        if(!navigator.geolocation){
            setLocationErrorMsg = "Geolocation is not supported by your browser";
        }else{
            //status.textConstent= "Locating";
            navigator.geolocation.getCurrentPosition(success, error);
        }
    };
    
    return {

    };

}

export default useTrackLocation;