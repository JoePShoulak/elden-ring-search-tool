import {
  Card,
  CardContent,
  CardHeader,
  Link,
  List,
  ListItem,
  Typography,
} from "@mui/material";

const TechLink = ({ name, link }) => (
  <>
    {" "}
    <Link href={link} target="_blank">
      {name}
    </Link>{" "}
  </>
);

const TechItem = ({ children }) => (
  <ListItem>
    <Typography>{children}</Typography>
  </ListItem>
);

const Technologies = () => (
  <Card>
    <CardHeader title="Technologies" />
    <CardContent>
      <List>
        <TechItem>
          Site running on
          <TechLink name="React" link="https://reactjs.org" />
        </TechItem>
      </List>
    </CardContent>
  </Card>
);

export default Technologies;
