import { useState } from "react";
import { useEffect } from "react";
import { Table, TableContainer, Typography } from "@mui/material";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const MiniTable = props => (
  <TableContainer component={Paper} style={{ marginTop: "10px" }}>
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>{props.firstLabel}</TableCell>
          <TableCell align="right">{props.secondLabel}</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {props.data.map(row => (
          <TableRow
            key={row[props.firstColumn]}
            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell component="th" scope="row">
              {row[props.firstColumn]}
            </TableCell>
            <TableCell align="right">{row[props.secondColumn]}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

const Attack = ({ attack }) => (
  <MiniTable
    firstLabel="Damage Type"
    secondLabel="Damage Amount"
    firstColumn="name"
    secondColumn="amount"
    data={attack}
  />
);

const Defence = ({ defence }) => (
  <MiniTable
    firstLabel="Defence Type"
    secondLabel="Defence Amount"
    firstColumn="name"
    secondColumn="amount"
    data={defence}
  />
);

const Requirements = ({ reqs }) => (
  <MiniTable
    firstLabel="Required Stat"
    secondLabel="Required Level"
    firstColumn="name"
    secondColumn="amount"
    data={reqs}
  />
);

const Scaling = ({ scaling }) => (
  <MiniTable
    firstLabel="Scaling Stat"
    secondLabel="Scaling Tier"
    firstColumn="name"
    secondColumn="scaling"
    data={scaling}
  />
);

const Weapon = ({ weapon }) => (
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography variant="h5">
        {weapon.name} - {weapon.category}
      </Typography>
    </AccordionSummary>
    <AccordionDetails>
      <img src={weapon.image} alt={`A ${weapon.name}`} />

      <Typography>Weight: {weapon.weight}</Typography>
      <Typography>Description: {weapon.description}</Typography>

      <Attack attack={weapon.attack} />
      <Defence defence={weapon.defence} />
      <Requirements reqs={weapon.requiredAttributes} />
      <Scaling scaling={weapon.scalesWith} />

      <Typography variant="caption">In-game ID: {weapon.id}</Typography>
    </AccordionDetails>
  </Accordion>
);

const Weapons = () => {
  const [weapons, setWeapons] = useState();

  useEffect(() => {
    async function loadWeapons() {
      const response = await fetch(
        "https://eldenring.fanapis.com/api/weapons?limit=20&page=1"
      );
      const results = await response.json();

      setWeapons(results.data);
    }

    loadWeapons();
  }, []);

  console.log(weapons && weapons[0]);

  return (
    weapons && (
      <>
        <Typography variant="h4" style={{ marginBottom: "20px" }}>
          Weapons
        </Typography>
        {weapons.map(wep => (
          <Weapon weapon={wep} key={wep.id} />
        ))}
      </>
    )
  );
};

export default Weapons;
