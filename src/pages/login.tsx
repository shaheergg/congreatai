import CongreatIcon from "@/assets/congreat-icon-light.png";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import CongreatLogo from "@/assets/congreatai.png";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { useIsMobile } from "@/hooks/use-mobile";
import useChatStateStore from "@/store/chatState";
import { useState } from "react";

const LoginPage = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<number | null>(null);
  const goBack = () => {
    navigate(-1);
  };
  const setChatState = useChatStateStore(
    (state: unknown) =>
      (state as { setChatState: (chatState: string) => void }).setChatState
  );
  const submitHandle = () => {
    if (!email || !password) {
      setError(1);
    } else {
      setError(2);
    }
  };
  const goToContact = () => {
    setChatState("Contact");
    navigate("/");
  };
  return (
    <div className="min-h-screen flex items-center">
      <div className="flex-1 h-full py-4 px-8">
        <div className="p-4 flex items-center">
          {!isMobile && (
            <Button
              onClick={goBack}
              variant={"outline"}
              className="text-primary rounded-full"
            >
              <ChevronLeft size={24} />
              Back
            </Button>
          )}
        </div>
        <div className="flex items-center flex-col justify-center pt-4 space-y-8">
          <div>
            <Link to={"/"}>
              <img className="h-8" src={CongreatLogo} alt="Congreat Logo" />
            </Link>
          </div>
          <div>
            <h2 className="text-[32px]">Login</h2>
          </div>
          <div className="max-w-sm space-y-4 w-full mx-auto">
            {error === 1 && (
              <div className="p-4 text-gray-600 flex items-center justify-center">
                Please enter email and password
              </div>
            )}
            {error === 2 && (
              <div className="p-4 text-gray-600 flex items-center justify-center">
                It looks like you are not our customer
              </div>
            )}
            {error !== 2 && (
              <form className="space-y-4">
                <Input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  required
                  placeholder="Email"
                />
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Password"
                />
                <Button
                  type="button"
                  onClick={() => submitHandle()}
                  className="w-full"
                >
                  Login
                </Button>
                {isMobile && (
                  <Button
                    onClick={goBack}
                    variant={"outline"}
                    type="button"
                    className="w-full text-primary rounded-full"
                  >
                    <ChevronLeft size={24} />
                    Back
                  </Button>
                )}
              </form>
            )}

            <div>
              <p className="text-[#92909599]">
                Not our client?{" "}
                <Button
                  onClick={goToContact}
                  variant={"link"}
                  className="px-1 font-semibold text-primary underline"
                >
                  Contact Us
                </Button>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 h-screen md:flex bg-primary hidden items-center justify-center">
        <div className="flex flex-col items-center gap-4 justify-center">
          <h2 className="text-white leading-[51px] text-[36px] max-w-xs font-light text-center">
            Manage any detail from the{" "}
            <span className="font-[700]">cockpit!</span>
          </h2>
          <img src={CongreatIcon} alt="congreat icon" className="h-12 w-auto" />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
