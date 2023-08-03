import { GoBell, GoDatabase, GoCloudOffline } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button primary>
          <GoBell />
          Click me
        </Button>
      </div>
      <div>
        <Button rounded>
          <GoDatabase />
          Click me
        </Button>
      </div>
      <div>
        <Button secondary>
          <GoCloudOffline />
          Click me
        </Button>
      </div>
      <div>
        <Button>Click me</Button>
      </div>
      <div>
        <Button>Click me</Button>
      </div>
    </div>
  );
}

export default ButtonPage;
