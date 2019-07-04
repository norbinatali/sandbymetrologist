package sandbymetrologist.service;

import sandbymetrologist.model.User;

public interface UserService {
    void save(User user);

    User findByUsername(String username);
}
