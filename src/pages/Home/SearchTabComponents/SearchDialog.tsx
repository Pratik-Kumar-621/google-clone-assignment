import { Drawer } from "@mui/material";

const SearchDialog = (props: any) => {
  const { openSearch, handleCloseSearch } = props;
  return (
    <Drawer open={openSearch} onClose={handleCloseSearch} anchor="bottom">
      Search drawer
    </Drawer>
  );
};

export default SearchDialog;
