const translation = {
  translation: {
    app: {
      name: 'Bedrock Claude Chat',
      inputMessage: 'Schicke eine Nachricht',
      starredBots: 'Starred Bots',
      recentlyUsedBots: 'Kürzlich verwendete Bots',
      conversationHistory: 'Verlauf',
    },
    bot: {
      label: {
        myBots: 'Meine Bots',
        recentlyUsedBots: 'Kürzlich verwendete geteilte Bots',
        loadingBot: 'Lädt...',
        normalChat: 'Chat',
        notAvailableBot: '[NICHT verfügbar]',
        notAvailableBotInputMessage: 'Dieser Bot ist NICHT verfügbar.',
        noDescription: 'Keine Beschreibung',
        notAvailable: 'Dieser Bot ist NICHT verfügbar.',
        noBots: 'Keine Bots.',
        noBotsRecentlyUsed: 'Keine kürzlich verwendete geteilte Bots.',
      },
      titleSubmenu: {
        edit: 'Bearbeiten',
        copyLink: 'Link kopieren',
        copiedLink: 'Kopiert',
      },
      help: {
        overview:
          'Bots arbeiten auf Basis von vorgefertigten Anweisungen. Ein Chat funktioniert nicht, wie beabsichtigt bis den entsprechenden Kontext in der Nachricht definierst. Bei Bots hingegen muss kein Kontext definiert werden.',
        instructions:
          'Definiere, wie sich der Bot verhalten soll. Zwei- oder mehrdeutige Anweisungen können zu unvorhersehbaren Reaktionen führen. Gib daher klare und spezifische Anweisungen.',
      },
      samples: {
        title: 'Anweisungs Beispiele',
        reference:
          'Siehe: https://docs.anthropic.com/claude/docs/how-to-use-system-prompts',
        pythonCodeAssistant: {
          title: 'Python Programmier Assistent',
          prompt: `Schreibe ein kurzes qualitativ hochwertiges Python Skript für eine bestimmte Aufgeabe, etwas das ein sehr fähiger Python Experte schreiben würde. Du schreibst Code für einen erfahrenen Entwickler, kommentiere daher nur Dinge die nicht trivial sind. Achte darauf die benötigten Importe mit aufzuführen. 
Schreibe NIEMALS etwas vor einem \`\`\`python\`\`\` Block. Nach dem Generieren des Codes und dem \`\`\`python\`\`\` Block, prüfe sorgfältig auf Fehler und Inkonsistenzen. Sollte es Fehler geben, liste diese in <error> Tags auf. Generiere anschließend eine Version in der diese Fehler behoben wurden. Sollte es keine Fehler geben scheibe "CHECKED: NO ERRORS" in <error> Tags.`,
        },
        mailCategorizer: {
          title: 'E-Mail-Kategorisator',
          prompt: `Du bist ein Mitarbeiter im Kundendienst. Deine Aufgabe besteht darin E-Mails auf Basis ihres Typs zu klassifizieren. Bitte gebe deine Antwort aus und begründe deine Klassifikation. 

Die Kategorien zur Klassifizierung sind: 
(A) Frage vor dem Verkauf
(B) Beschädigter oder defekter Artikel
(C) Frage zu Rechnung 
(D) Sonstiges (bitte erläutern)

Wie würdest du diese E-Mail kategorisieren?`,
        },
        fitnessCoach: {
          title: 'Persönlicher Fitness Trainer',
          prompt: `Sie sind ein fröhlicher enthusiastischer Fitness Trainer namens Sam. Sams Leidenschaft ist es Kunden dabei zu helfen, sich einen gesünderen Lebenstil anzueignen. Du schreibst in einem aufmunternden Ton und versuchst immer deine Kunden zum Ziel einer besseren Fitness zu führen. Wenn der Nutzer etwas fragt das nicht in Zusammenhang mit Fitness steht, kannst du entweder das Thema zurück zur Fitness bringen oder sagen, dass du nicht antworten kannst.`,
        },
      },
      create: {
        pageTitle: 'Erstelle meinen Bot',
      },
      edit: {
        pageTitle: 'Bearbeite meinen Bot',
      },
      item: {
        title: 'Name',
        description: 'Beschreibung',
        instruction: 'Anweisung',
      },
      button: {
        newBot: 'Erstelle einen New Bot',
        create: 'Erstellen',
        edit: 'Bearbeiten',
        delete: 'Löschen',
        share: 'Teilen',
        copy: 'Kopieren',
        copied: 'Kopiert',
        instructionsSamples: 'Beispiele',
      },
      deleteDialog: {
        title: 'Löschen?',
        content: 'Bist du sicher das du <Bold>{{title}}</Bold> löschen willst?',
      },
      shareDialog: {
        title: 'Teilen',
        off: {
          content:
            'Das Teilen von Links ist deaktiviert. Nur du kannst diesen Bot über seine URL abrufen.',
        },
        on: {
          content:
            'Das Teilen von Links ist aktiviert. ALLE Nutzer können den Link zu dieser Konversation verwenden.',
        },
      },
    },
    deleteDialog: {
      title: 'Löschen?',
      content: 'Bist du sicher das du <Bold>{{title}}</Bold> löschen willst?',
    },
    clearDialog: {
      title: 'ALLES Löschen?',
      content: 'Bist du sicher das du ALLE Konversatitonen löschen willst?',
    },
    languageDialog: {
      title: 'Sprache ändern',
    },
    button: {
      newChat: 'Neuer Chat',
      botConsole: 'Bot Console',
      SaveAndSubmit: 'Speichern und Abschicken',
      resend: 'Erneut Abschicken',
      regenerate: 'Erneut Generieren',
      delete: 'Löschen',
      deleteAll: 'Lösche ALLES',
      done: 'Fertig',
      ok: 'OK',
      cancel: 'Abbrechen',
      back: 'Zurück',
      menu: 'Menü',
      language: 'Sprache',
      clearConversation: 'Lösche ALLE Konversatitonen',
      signOut: 'Abmelden',
      close: 'Schließen',
    },
    error: {
      answerResponse: 'Beim Antworten ist ein Fehler aufgetreten.',
      notFoundConversation:
        'Da der angegebene Chat nicht existiert, wird ein neuer Chat angezeigt.',
      notFoundPage: 'Die gesuchte Seite wurde nicht gefunden.',
      predict: {
        general: 'Bei der Vorhersage ist ein Fehler aufgetreten.',
        invalidResponse:
          'Unerwartete Antwort erhalten. Das Antwort entspricht nicht dem erwarteten Format.',
      },
    },
  },
};

export default translation;
