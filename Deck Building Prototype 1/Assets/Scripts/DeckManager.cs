using System.Collections.Generic;
using UnityEngine;

/// <summary>
/// Persists across scenes. Owns and stores all deck data.
/// Decks are now MonoBehaviours living on spawned GameObjects.
/// </summary>
public class DeckManager : MonoBehaviour
{
    // ── Singleton ─────────────────────────────────────────────────────────────
    public static DeckManager Instance { get; private set; }

    // ── Inspector Fields ──────────────────────────────────────────────────────
    [Header("Settings")]
    [SerializeField] private int maxDecks = 6;

    [Header("All Decks")]
    [SerializeField] private List<Deck> decks = new List<Deck>();

    // ── Public Read-only Access ───────────────────────────────────────────────
    public IReadOnlyList<Deck> Decks => decks;
    public int DeckCount => decks.Count;
    public int MaxDecks => maxDecks;
    public bool IsAtCapacity() => decks.Count >= maxDecks;

    // ── Unity Lifecycle ───────────────────────────────────────────────────────
    private void Awake()
    {
        if (Instance != null && Instance != this)
        {
            Destroy(gameObject);
            return;
        }

        Instance = this;
        DontDestroyOnLoad(gameObject);
    }

    // ── Public API ────────────────────────────────────────────────────────────

    /// <summary>
    /// Registers a Deck MonoBehaviour into the manager.
    /// Called by DeckCreator after spawning and configuring the deck prefab.
    /// </summary>
    public bool RegisterDeck(Deck deck)
    {
        if (deck == null)
        {
            Debug.LogWarning("DeckManager: Cannot register a null deck.");
            return false;
        }

        if (IsAtCapacity())
        {
            Debug.LogWarning($"DeckManager: Cannot register deck. Limit of {maxDecks} reached.");
            return false;
        }

        decks.Add(deck);
        Debug.Log($"DeckManager: Registered \"{deck.DeckName}\". Total: {decks.Count}/{maxDecks}.");
        return true;
    }

    /// <summary>
    /// Unregisters a deck and destroys its GameObject.
    /// </summary>
    public void UnregisterDeck(Deck deck)
    {
        if (deck == null || !decks.Contains(deck))
        {
            Debug.LogWarning("DeckManager: Deck not found or null.");
            return;
        }

        decks.Remove(deck);
        Destroy(deck.gameObject);
        Debug.Log($"DeckManager: Unregistered and destroyed deck. Total: {decks.Count}/{maxDecks}.");
    }

    /// <summary>
    /// Returns the deck at the given index, or null if out of range.
    /// </summary>
    public Deck GetDeck(int index)
    {
        if (index < 0 || index >= decks.Count)
        {
            Debug.LogWarning($"DeckManager: Index {index} is out of range.");
            return null;
        }

        return decks[index];
    }
}