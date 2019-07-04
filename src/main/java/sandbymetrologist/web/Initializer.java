package sandbymetrologist.web;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import sandbymetrologist.dao.RoleDao;
import sandbymetrologist.dao.UserDao;
import sandbymetrologist.model.Role;
import sandbymetrologist.model.User;

@Component
public class Initializer implements CommandLineRunner {
    private final UserDao userDao;
    private final RoleDao roleDao;

    public Initializer(UserDao userDao, RoleDao roleDao) {
        this.userDao = userDao;
        this.roleDao = roleDao;
    }

    @Override
    public void run(String... strings) throws Exception {
        this.userDao.save(new User());
        this.roleDao.save(new Role());
    }
}
