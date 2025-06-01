import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

public class Main {
    public static String minDate(List<String> dates) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy/MM/dd");

        // Initialize minDate with the first date in the list
        LocalDate minDate = LocalDate.parse(dates.get(0), formatter);

        for (String dateStr : dates) {
            LocalDate date = LocalDate.parse(dateStr, formatter);
            if (date.isBefore(minDate)) {
                minDate = date;
            }
        }

        return minDate.format(formatter);
    }

    public static void main(String[] args) {
        List<String> example1 = List.of("2023/03/01", "2023/03/02", "2023/03/03");
        List<String> example2 = List.of("2023/01/01", "2023/02/02", "2022/12/31");

        System.out.println(minDate(example1)); // Output: "2023/03/01"
        System.out.println(minDate(example2)); // Output: "2022/12/31"
    }
}
