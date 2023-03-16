import "./App.css";

function App() {
  return (
    <div className="App">
      <table className="table">
        <tr>
          <th>-</th>
          <th>9:00</th>
          <th>10:00</th>
          <th>11:00</th>
          <th>12:00</th>
          <th>13:00</th>
          <th>14:00</th>
          <th>15:00</th>
          <th>16:00</th>
          <th>17:00</th>
          <th>18:00</th>
          <th>19:00</th>
          <th>20:00</th>
          <th>21:00</th>
        </tr>
        <tr>
          <th>LUNES</th>
          <td colSpan={5}></td>
          <td colSpan={3}>Matematica discreta</td>
          <td></td>
          <td colSpan={4}>Analisis y produccion del discurso</td>
        </tr>
        <tr>
          <th>MARTES</th>
        </tr>
        <tr>
          <th>MIERCOLES</th>
        </tr>
        <tr>
          <th>JUEVES</th>
        </tr>
        <tr>
          <th>VIERNES</th>
        </tr>
        <tr>
          <th>SABADO</th>
        </tr>
      </table>
    </div>
  );
}

export default App;
