package sandbymetrologist.dao;


import org.springframework.data.jpa.repository.JpaRepository;
import sandbymetrologist.model.Role;

public interface RoleDao extends JpaRepository<Role, Long> {
}
