<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $config = require __DIR__ . '/../config/config.php';
    $search = trim($_POST['search'] ?? '');
    $apiKey = $config['api_key'];

    if ($search !== '') {
        $logFile = __DIR__ . '/../logs/search.log';
        if (!is_dir(__DIR__ . '/../logs')) {
            mkdir(__DIR__ . '/../logs', 0777, true);
        }
        $logLine = date('Y-m-d H:i:s') . " - Recherche : " . $search . PHP_EOL;
        file_put_contents($logFile, $logLine, FILE_APPEND);

        $url = "https://api.themoviedb.org/3/search/movie?api_key=$apiKey&language=fr-FR&query=" . urlencode($search);
        $response = file_get_contents($url);

        if ($response !== false) {
            echo $response;
            exit;
        }
    }

    echo json_encode(['results' => []]);
}