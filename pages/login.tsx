export default function Login() {
  return (
    <>
      <h1>Login</h1>
      <h3>Select your map style</h3>
      {/* <label for="map-styles">Choose a car:</label> */}
      <select name="-- Select mapstyle --" id="map-styles">
        <option value="Satelite" id="satellite">
          Satelite
        </option>
        <option value="Streets" id="streets">
          Streets
        </option>
        <option value="Dark" id="dark">
          Dark
        </option>
        <option value="Light" id="light">
          Light
        </option>
      </select>
    </>
  );
}
