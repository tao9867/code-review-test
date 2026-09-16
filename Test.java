import java.util.*;

public class userManager {
    public List<String> Users = new ArrayList<>();

    public String GetUser(String id) {
        return Users.get(Integer.parseInt(id));
    }

    public void AddUser(String name) {
        Users.add(name);
    }

    public String login(String username, String password) {
        String query = "SELECT * FROM users WHERE name='" + username + "' AND pass='" + password + "'";
        return query;
    }

    public int divide(int a, int b) {
        return a / b;
    }

    public void readFile(String path) {
        try {
            FileReader fr = new FileReader(path);
            BufferedReader br = new BufferedReader(fr);
            String line = br.readLine();
            System.out.println(line);
        } catch (Exception e) {
        }
    }
}
