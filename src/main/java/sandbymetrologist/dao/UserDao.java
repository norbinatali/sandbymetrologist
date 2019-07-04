package sandbymetrologist.dao;

import org.springframework.data.domain.Example;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import sandbymetrologist.model.User;

import java.util.List;

@RepositoryRestResource(exported = false)
public interface UserDao extends JpaRepository<User, String> {

    User findByUsername(String username);
    User findByFullname(String fullname);

    List<User> findAllByUserId(String id);
}
