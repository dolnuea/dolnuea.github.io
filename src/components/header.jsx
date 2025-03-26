import { useState } from "react";
import { Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 flex justify-between items-center p-4 dark:bg-gray-900 shadow-md z-50">
      <Link to="/" className="ml-4">
        <h1 className="text-white transform hover:scale-105 transition-transform duration-300">
          Dolunay Dagci | Software Engineer
        </h1>
      </Link>

      <div className="md:hidden">
        <IconButton onClick={() => setOpen(true)} style={{ color: "white" }}>
          <MenuIcon />
        </IconButton>
      </div>

      <nav className="hidden md:flex space-x-6">
        <Link to="/resume" className="hover:underline">
          Resume
        </Link>
        <a href="#hobbies" className="hover:underline">
          Hobbies
        </a>
      </nav>

      <Drawer 
        anchor="right" 
        open={open} 
        onClose={() => setOpen(false)} 
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "#040436",  
            color: "white",
          },
        }}
      >
        <List className="w-48">
          <ListItem button component={Link} to="/resume" onClick={() => setOpen(false)}>
            <ListItemText className="drawerfont" primary="Resume" />
          </ListItem>
          <ListItem button component="a" href="#hobbies" onClick={() => setOpen(false)}>
            <ListItemText className="drawerfont" primary="Free Time" />
          </ListItem>
        </List>
      </Drawer>
    </header>
  );
}
