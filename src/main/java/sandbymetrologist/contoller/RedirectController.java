package sandbymetrologist.contoller;

import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller

public class RedirectController {
    @RequestMapping(value = "/")
    public String index() {
        return "index";
    }
}
